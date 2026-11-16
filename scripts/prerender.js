/**
 * After `vite build` (client) and `vite build --ssr` (server), render the page
 * once and write the HTML into dist/index.html. Visitors and search engines then
 * get the full content immediately, before any JavaScript runs.
 */
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const dist = resolve("dist");
const ssrEntry = pathToFileURL(resolve("dist-ssr/entry-server.js")).href;

const { render } = await import(ssrEntry);
const template = await readFile(resolve(dist, "index.html"), "utf8");
const appHtml = render();

if (!template.includes('<div id="root"></div>')) throw new Error("Root placeholder not found in dist/index.html");

// Preload the hero photo so it starts downloading alongside the CSS.
const hero = appHtml.match(/<img[^>]+fetchPriority="high"[^>]*>/i)?.[0] ?? appHtml.match(/<img[^>]+fetchpriority="high"[^>]*>/i)?.[0];
const srcset = hero?.match(/srcSet="([^"]+)"/i)?.[1];
const preload = srcset
  ? `<link rel="preload" as="image" imagesrcset="${srcset}" imagesizes="100vw" fetchpriority="high" />\n  `
  : "";

// Preload the three Latin font files the hero text uses (body, display, display italic) so
// they download in parallel with the HTML instead of after the CSS is parsed. Measured: with
// only the body font preloaded, first paint on mobile is ~1 s later.
const assets = await readdir(resolve(dist, "assets"));
const heroFonts = [/^manrope-latin-wght-normal-.*\.woff2$/, /^fraunces-latin-wght-normal-.*\.woff2$/, /^fraunces-latin-wght-italic-.*\.woff2$/]
  .map((re) => assets.find((f) => re.test(f)))
  .filter(Boolean)
  .map((f) => `<link rel="preload" as="font" type="font/woff2" href="/assets/${f}" crossorigin />\n  `)
  .join("");

// Inline the (small) stylesheet: one less render-blocking request before first paint.
let page = template;
const cssLink = page.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (cssLink) {
  const css = await readFile(resolve(dist, cssLink[1].slice(1)), "utf8");
  page = page.replace(cssLink[0], `<style>${css}</style>`);
}

const html = page
  .replace("</head>", `  ${preload}${heroFonts}</head>`)
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

await writeFile(resolve(dist, "index.html"), html);
await rm(resolve("dist-ssr"), { recursive: true, force: true });
console.log(`Pre-rendered dist/index.html (${(html.length / 1024).toFixed(1)} KB)${preload ? ", hero preloaded" : ""}`);
