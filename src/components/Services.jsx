import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, whatsappLink } from "../data/site.js";
import { EASE, Img, SectionHeading, viewport } from "./ui.jsx";

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our services" title="Design, furniture and renovation under one roof." accent={["roof."]} />
          <a href={whatsappLink("Hello! I'd like to discuss a project with Woodspec.")} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0 self-start md:self-end">
            Discuss your project <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 1, ease: EASE, delay: i * 0.12 }}
              className={i === 1 ? "md:mt-16" : ""}
            >
              <article className="group relative overflow-hidden rounded-[2rem] bg-teal-950 text-cream">
                <Img
                  image={s.image}
                  sizes="(min-width: 1280px) 384px, (min-width: 768px) 30vw, 92vw"
                  className="aspect-[3/4] w-full object-cover opacity-90 transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent" />
                <span className="absolute left-6 top-6 rounded-full border border-cream/30 bg-teal-950/30 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                  0{i + 1}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="display text-3xl leading-tight">{s.title}</h3>
                  {/* Text is always visible; hover only adds a little lift. */}
                  <p className="mt-3 text-sm leading-relaxed text-cream/75 transition-transform duration-500 group-hover:-translate-y-1">
                    {s.text}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
