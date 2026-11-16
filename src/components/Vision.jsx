import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { vision } from "../data/site.js";
import { Img, Reveal } from "./ui.jsx";

/** Pull quote whose words light up one by one as you scroll through it. */
export default function Vision() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.55"] });
  const words = vision.quote.split(" ");

  return (
    <section id="vision" className="relative py-24 sm:py-36">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-sand px-6 py-16 sm:px-14 sm:py-24">
          <Img image={vision.image} className="absolute inset-0 -z-10 size-full object-cover opacity-[0.07]" />
          <Reveal as="p" className="eyebrow">Our vision</Reveal>
          <p ref={ref} className="display mt-8 max-w-5xl text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1.12] text-teal-950">
            <span className="sr-only">{vision.quote}</span>
            <span aria-hidden="true">
              {words.map((word, i) => (
                <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                  {word}
                </Word>
              ))}
            </span>
          </p>
          <Reveal as="p" delay={0.1} className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
            {vision.body}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}
