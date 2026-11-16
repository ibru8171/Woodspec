import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "../data/site.js";
import { EASE, Img, SectionHeading, viewport } from "./ui.jsx";

const SPAN = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
};

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const go = useCallback((step) => setIndex((i) => (i + step + gallery.length) % gallery.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gallery"
          title="A look at the spaces we love to create."
          accent={["create."]}
          lead="Living rooms, bedrooms, kitchens and workspaces. Tap any image to view it full screen."
        />

        <ul className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[240px] sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.9, ease: EASE, delay: (i % 4) * 0.07 }}
              className={SPAN[item.size] ?? ""}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative size-full overflow-hidden rounded-3xl bg-sand"
                aria-label={`View ${item.caption} full screen`}
              >
                <Img
                  image={item}
                  sizes={
                    item.size === "wide"
                      ? "(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1280px) 300px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="size-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 text-sm font-semibold text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <Expand className="size-4" aria-hidden /> {item.caption}
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${gallery[index].caption}, image ${index + 1} of ${gallery.length}`}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-teal-950/95 p-4 backdrop-blur-sm sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={gallery[index].full}
                alt={gallery[index].alt}
                className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-cream/70">
              {gallery[index].caption} · {index + 1} / {gallery.length}
            </p>
            {[
              { label: "Previous image", icon: ChevronLeft, step: -1, pos: "left-3 sm:left-6" },
              { label: "Next image", icon: ChevronRight, step: 1, pos: "right-3 sm:right-6" },
            ].map(({ label, icon: Icon, step, pos }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={(e) => {
                  e.stopPropagation();
                  go(step);
                }}
                className={`absolute top-1/2 ${pos} grid size-12 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur hover:bg-cream/20`}
              >
                <Icon className="size-6" />
              </button>
            ))}
            <button
              type="button"
              aria-label="Close"
              autoFocus
              onClick={() => setIndex(null)}
              className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
            >
              <X className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
