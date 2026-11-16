# Woodspec Interiors website

Website for **Woodspec Project Link / Woodspec Interiors**, an interior design studio in Aluva, Kochi: www.woodspecproject.com

Built with React 19, Vite 8, Tailwind CSS 4 and Framer Motion. The page is pre-rendered to HTML at build time, so it loads fast and search engines see all the content.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/ (client + pre-render)
npm run preview   # serve the production build at http://localhost:4173
```

Node 22 is expected (`engines` in package.json).

## Edit content

All text, phone numbers, address, social links, services, offers, gallery and testimonials live in **`src/data/site.js`**. Components never hard-code copy.

## Add or replace photos

1. Put the original photo somewhere outside `src/` (e.g. a `photos/` folder).
2. Add it to the `PHOTOS` list in `scripts/optimize-images.py` with a short name, e.g. `"g-terrace": ("terrace.jpg", GALLERY, None)`.
3. Run `python scripts/optimize-images.py photos` (needs Pillow). It writes web-sized WebP files into `src/assets/img/`.
4. Use it in `src/data/site.js`: `photo("g-terrace", "Describe the photo for screen readers")`.

`photo()` picks up every size automatically and builds the `srcset`.

The original logo files are in `brand/`.

## Structure

```
src/
  data/site.js          all content
  components/           one file per section (Hero, About, Services, Gallery, Offer, Vision, Testimonials, Contact, Footer)
  components/ui.jsx     shared pieces: Reveal, SplitHeading, SectionHeading, Img, Logo, brand icons
  index.css             design tokens (colours, fonts) and hero CSS animations
  entry-server.jsx      used by scripts/prerender.js at build time
scripts/
  optimize-images.py    turns original photos into responsive WebP files
  prerender.js          writes the rendered page into dist/index.html, inlines CSS, preloads hero image and fonts
```

## Deploy

The Vercel project `woodspecproject` serves www.woodspecproject.com. `vercel.json` sets the framework to Vite.
