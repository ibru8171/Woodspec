import { company, nav } from "../data/site.js";
import { Logo } from "./ui.jsx";
import { SOCIALS } from "./Contact.jsx";

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-cream">
      <div className="container-x border-t border-cream/10 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <a href="#top" aria-label={`${company.fullName}, back to top`}>
            <Logo light />
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/70">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="link-line hover:text-cream">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Woodspec on ${label} (opens in a new tab)`}
                className="grid size-10 place-items-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Oversized wordmark that the page "ends" on. */}
        <p aria-hidden="true" className="display mt-14 select-none overflow-hidden whitespace-nowrap bg-gradient-to-b from-cream/25 to-transparent bg-clip-text pb-[0.1em] text-center text-[min(19vw,16.5rem)] leading-[0.85] text-transparent">
          Woodspec
        </p>

        <div className="mt-8 flex flex-col gap-2 text-xs text-cream/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {company.fullName}. All rights reserved.</p>
          <p>{company.address.locality}, {company.address.region}</p>
        </div>
      </div>
    </footer>
  );
}
