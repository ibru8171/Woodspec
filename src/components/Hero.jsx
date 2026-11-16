import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck, Palette } from "lucide-react";
import { hero, whatsappLink } from "../data/site.js";
import { Img, WhatsAppIcon } from "./ui.jsx";

const d = (s) => ({ "--d": `${s}s` });

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-teal-950 text-cream">
      {/* Photo: slow zoom-out on load, drifts down while scrolling. */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-10">
        <Img image={hero.image} eager sizes="100vw" className="size-full animate-ken-burns object-cover object-[60%_50%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/45 to-teal-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: fade }} className="container-x relative pb-10 pt-32 sm:pb-24 sm:pt-36">
        <p className="anim-fade-up eyebrow text-wood-soft" style={d(0.2)}>
          {hero.eyebrow}
        </p>

        <h1 className="display mt-6 max-w-5xl text-[clamp(2.9rem,8.5vw,7.5rem)] leading-[0.95]">
          {hero.title.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <span className={`anim-rise block ${i === 1 ? "italic text-sage-soft" : ""}`} style={d(0.1 + i * 0.12)}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="anim-lift max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg" style={d(0.3)}>
              {hero.lead}
            </p>
            <div className="anim-fade-up mt-8 flex flex-wrap gap-3" style={d(0.45)}>
              <a href="#gallery" className="btn-light group">
                Explore our work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost text-cream">
                <WhatsAppIcon className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3 lg:flex lg:flex-col" aria-label="Highlights">
            {[
              { icon: ShieldCheck, big: "10 yr", small: "warranty on plyboards" },
              { icon: Palette, big: "1000+", small: "color options" },
            ].map(({ icon: Icon, big, small }, i) => (
              <li
                key={big}
                style={d(0.6 + i * 0.12)}
                className="anim-fade-up flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/[0.07] px-4 py-3 backdrop-blur-md sm:gap-4 sm:px-5 sm:py-4"
              >
                <Icon className="hidden size-6 shrink-0 text-wood-soft sm:block" aria-hidden />
                <span>
                  <span className="display block text-2xl leading-none">{big}</span>
                  <span className="mt-1 block text-xs text-cream/65">{small}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to About"
        style={d(1.2)}
        className="anim-fade-up absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-cream/60 md:flex"
      >
        <span aria-hidden>Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="size-4" aria-hidden />
        </motion.span>
      </a>
    </section>
  );
}
