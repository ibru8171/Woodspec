import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "../data/site.js";
import { WhatsAppIcon } from "./ui.jsx";

/** Floating WhatsApp button; appears once the visitor scrolls past the hero. */
export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Woodspec on WhatsApp (opens in a new tab)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.6)] sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30 [animation-duration:2.4s]" />
          <WhatsAppIcon className="relative size-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
