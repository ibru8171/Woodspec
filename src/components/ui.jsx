import { motion } from "framer-motion";
import wsMark from "../assets/img/ws-mark.webp";

export const EASE = [0.16, 1, 0.3, 1];
export const viewport = { once: true, margin: "0px 0px -12% 0px" };

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ as = "div", delay = 0, y = 28, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Splits a heading into words that rise out of a mask one after another. */
export function SplitHeading({ as = "h2", text, className, delay = 0, accent }) {
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span
            className={`inline-block ${accent && accent.includes(word) ? "italic text-wood" : ""}`}
            variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 1, ease: EASE } } }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, accent, lead, light = false, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal as="p" className={`eyebrow ${light ? "text-wood-soft" : ""} ${align === "center" ? "justify-center" : ""}`}>
        {eyebrow}
      </Reveal>
      <SplitHeading
        text={title}
        accent={accent}
        className={`display mt-5 text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] ${light ? "text-cream" : "text-teal-950"}`}
      />
      {lead && (
        <Reveal as="p" delay={0.15} className={`mt-6 text-lg leading-relaxed ${light ? "text-cream/70" : "text-muted"}`}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}

/** Responsive image: lazy by default, with srcset when several sizes exist. */
export function Img({ image, sizes = "100vw", className, eager = false, ...rest }) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      alt={image.alt ?? ""}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : undefined}
      className={className}
      {...rest}
    />
  );
}

export function Logo({ light = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`grid size-10 place-items-center rounded-xl ${light ? "bg-cream/95" : "bg-white"} shadow-sm ring-1 ring-black/5`}>
        <img src={wsMark} alt="" width="26" height="26" className="size-[26px] object-contain" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl font-medium tracking-tight ${light ? "text-cream" : "text-teal-950"}`}>Woodspec</span>
        <span className={`mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${light ? "text-cream/60" : "text-sage"}`}>
          Project Link
        </span>
      </span>
    </span>
  );
}

/* Brand icons (lucide no longer ships logos). */
export const FacebookIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
export const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
export const YoutubeIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8M9.6 15.6V8.4l6.3 3.6z" />
  </svg>
);
export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.8 11.8 0 0 0-3.48-8.41" />
  </svg>
);
