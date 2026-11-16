import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "../data/site.js";
import { EASE, SectionHeading } from "./ui.jsx";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const t = testimonials[index];
  const go = (step) => setIndex((i) => (i + step + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [paused, reduced]);

  return (
    <section id="testimonials" className="bg-sand py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Client testimonials" title="Kind words from the people we design for." accent={["design", "for."]} />
          <div className="mt-10 flex items-center gap-3">
            {[
              { label: "Previous testimonial", icon: ArrowLeft, step: -1 },
              { label: "Next testimonial", icon: ArrowRight, step: 1 },
            ].map(({ label, icon: Icon, step }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={() => go(step)}
                className="grid size-12 place-items-center rounded-full border border-teal-900/20 text-teal-950 transition-colors hover:bg-teal-950 hover:text-cream"
              >
                <Icon className="size-5" />
              </button>
            ))}
            <div className="ml-3 flex gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial from ${item.name}`}
                  onClick={() => setIndex(i)}
                  className="relative h-1.5 w-8 overflow-hidden rounded-full bg-teal-900/15"
                >
                  {i === index && (
                    <motion.span
                      key={`${index}-${paused}`}
                      className="absolute inset-y-0 left-0 bg-wood"
                      initial={{ width: paused || reduced ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: paused || reduced ? 0 : 6.5, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <figure
          className="relative min-h-[22rem] rounded-[2.5rem] bg-cream p-8 shadow-[0_30px_80px_-40px_rgb(12_46_53/0.45)] sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
        >
          <Quote className="size-12 text-wood/40" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <blockquote className="display mt-6 text-2xl leading-snug text-teal-950 sm:text-[2rem]">“{t.quote}”</blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-teal-900 font-display text-lg text-cream" aria-hidden>
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-teal-950">{t.name}</span>
                  <span className="text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </figure>
      </div>
    </section>
  );
}
