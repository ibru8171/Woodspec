import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { company, nav, whatsappLink } from "../data/site.js";
import { EASE, Logo } from "./ui.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        style={{ "--d": "0.15s" }}
        className={`anim-drop transition-[background-color,box-shadow,padding] duration-500 ${
          solid ? "bg-cream/85 py-3 shadow-[0_1px_0_rgb(23_32_31/0.08)] backdrop-blur-xl" : "py-5"
        }`}
      >
        <nav aria-label="Main" className="container-x flex items-center justify-between gap-6">
          <a href="#top" aria-label={`${company.fullName}, back to top`} onClick={() => setOpen(false)}>
            <Logo light={!solid} />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    solid ? "text-ink/75 hover:text-teal-950" : "text-cream/80 hover:text-cream"
                  } ${active === item.id ? (solid ? "!text-teal-950" : "!text-cream") : ""}`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute inset-x-0 -bottom-0.5 mx-auto size-1 rounded-full bg-wood"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex ${solid ? "btn-primary" : "btn-light"} !py-2.5`}
            >
              Get a quote <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`grid size-11 place-items-center rounded-full lg:hidden ${solid ? "text-teal-950" : "text-cream"}`}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-[68px] bg-cream lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pt-8">
              {nav.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: EASE }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline gap-4 border-b border-ink/10 py-4 text-4xl text-teal-950"
                  >
                    <span className="font-sans text-xs font-semibold text-wood">0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-x mt-8">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Get a quote on WhatsApp <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
