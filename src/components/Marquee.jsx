import { highlights } from "../data/site.js";

/** Endless ribbon of services and promises between the hero and About. */
export default function Marquee() {
  const row = [...highlights, ...highlights];
  return (
    <div className="relative overflow-hidden border-y border-teal-900/10 bg-sand py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="display text-2xl text-teal-900 sm:text-3xl">{item}</span>
            <span className="size-2 rotate-45 bg-wood" />
          </span>
        ))}
      </div>
    </div>
  );
}
