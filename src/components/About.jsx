import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { about, specialties } from "../data/site.js";
import { EASE, Img, Reveal, SectionHeading, viewport } from "./ui.jsx";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBig = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const ySmall = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const [main, second, third] = about.images;

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image collage: big photo with two smaller ones floating at different speeds. */}
        <div className="relative mx-auto w-full max-w-lg pb-16 lg:max-w-none">
          <motion.div
            style={{ y: yBig }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={viewport}
            transition={{ duration: 1.4, ease: EASE }}
            className="overflow-hidden rounded-[2rem]"
          >
            <Img image={main} sizes="(min-width: 1280px) 560px, (min-width: 1024px) 42vw, 90vw" className="aspect-[4/5] w-full object-cover" />
          </motion.div>
          <motion.div
            style={{ y: ySmall }}
            className="absolute -right-2 bottom-0 w-[42%] overflow-hidden rounded-3xl border-[6px] border-cream shadow-2xl sm:-right-8"
          >
            <Img image={second} sizes="(min-width: 1024px) 230px, 40vw" className="aspect-square w-full object-cover" />
          </motion.div>
          <motion.div
            style={{ y: ySmall }}
            className="absolute -left-4 top-10 hidden w-[30%] overflow-hidden rounded-3xl border-[6px] border-cream shadow-2xl sm:block lg:-left-10"
          >
            <Img image={third} sizes="(min-width: 1024px) 170px, 30vw" className="aspect-square w-full object-cover" />
          </motion.div>
        </div>

        <div>
          <SectionHeading eyebrow="About us" title="Spaces shaped around the way you live." accent={["live."]} />
          {about.body.map((p, i) => (
            <Reveal as="p" key={i} delay={0.1 + i * 0.08} className="mt-6 text-lg leading-relaxed text-muted">
              {p}
            </Reveal>
          ))}

          <ul className="mt-12 border-t border-teal-900/10">
            {specialties.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={0.15 + i * 0.08}
                className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-teal-900/10 py-6 sm:grid-cols-[3rem_14rem_1fr]"
              >
                <span className="font-display text-lg text-wood transition-transform duration-500 group-hover:translate-x-1">0{i + 1}</span>
                <h3 className="font-semibold text-teal-950">{s.title}</h3>
                <p className="col-start-2 mt-2 text-sm leading-relaxed text-muted sm:col-start-3 sm:mt-0">{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
