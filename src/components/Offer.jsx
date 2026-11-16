import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Palette, ShieldCheck, Wallet } from "lucide-react";
import { offerImage, offers } from "../data/site.js";
import { EASE, Img, SectionHeading, viewport } from "./ui.jsx";

const ICONS = { wallet: Wallet, clock: Clock, palette: Palette, shield: ShieldCheck };

export default function Offer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="offer" ref={ref} className="grain relative isolate overflow-hidden bg-teal-950 py-24 text-cream sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            light
            eyebrow="What we offer"
            title="Quality you can count on, at a price that fits."
            accent={["fits."]}
            lead="Four promises behind every Woodspec project."
          />
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0 round 2rem)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0 round 2rem)" }}
            viewport={viewport}
            transition={{ duration: 1.3, ease: EASE }}
            className="mt-12 hidden overflow-hidden rounded-[2rem] lg:block"
          >
            <motion.div style={{ y }} className="scale-110">
              <Img image={offerImage} sizes="(min-width: 1280px) 520px, 40vw" className="aspect-[5/4] w-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {offers.map((o, i) => {
            const Icon = ICONS[o.icon];
            return (
              <motion.li
                key={o.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.9, ease: EASE, delay: (i % 2) * 0.1 }}
                className={`group flex flex-col rounded-[2rem] border border-cream/10 bg-cream/[0.04] p-7 transition-colors duration-500 hover:border-wood-soft/40 hover:bg-cream/[0.07] ${
                  i % 2 === 1 ? "sm:translate-y-12" : ""
                }`}
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-wood/20 text-wood-soft transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="size-6" aria-hidden />
                </span>
                {o.stat && (
                  <p className="display mt-8 text-6xl leading-none text-cream">
                    {o.stat}
                    <span className="mt-2 block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-sage-soft">
                      {o.statLabel}
                    </span>
                  </p>
                )}
                <h3 className={`text-xl font-semibold ${o.stat ? "mt-6" : "mt-8"}`}>{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{o.text}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
