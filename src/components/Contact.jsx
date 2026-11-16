import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company, contact, mapsLink, whatsappLink } from "../data/site.js";
import { FacebookIcon, Img, InstagramIcon, Reveal, SectionHeading, WhatsAppIcon, YoutubeIcon } from "./ui.jsx";

export const SOCIALS = [
  { label: "Facebook", href: company.socials.facebook, icon: FacebookIcon },
  { label: "Instagram", href: company.socials.instagram, icon: InstagramIcon },
  { label: "YouTube", href: company.socials.youtube, icon: YoutubeIcon },
];

export default function Contact() {
  // The map only loads when asked for, so it never slows the page down.
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="contact" className="grain relative isolate overflow-hidden bg-teal-950 py-24 text-cream sm:py-32">
      <Img image={contact.image} className="absolute inset-0 -z-10 size-full object-cover opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-950 via-teal-950/90 to-teal-900/80" />

      <div className="container-x grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading light eyebrow="Contact us" title={contact.title} accent={["space."]} lead={contact.lead} />
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn bg-[#25d366] text-teal-950 hover:bg-[#3be07a]">
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </a>
            <a href={`tel:${company.phones[1].replace(/\s/g, "")}`} className="btn-ghost text-cream">
              <Phone className="size-4" aria-hidden /> Call us
            </a>
          </Reveal>

          <Reveal delay={0.25} className="mt-12 flex gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Woodspec on ${label} (opens in a new tab)`}
                className="grid size-12 place-items-center rounded-full border border-cream/20 transition-colors hover:border-wood-soft hover:bg-wood-soft hover:text-teal-950"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="grid gap-4 self-start">
          <ContactCard icon={MapPin} title="Visit us">
            <address className="not-italic leading-relaxed text-cream/80">
              {company.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="link-line mt-3 inline-flex items-center gap-1 text-sm font-semibold text-wood-soft">
              Open in Google Maps <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </ContactCard>

          <div className="grid gap-4 sm:grid-cols-2">
            <ContactCard icon={Phone} title="Call us">
              {company.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="link-line block w-fit text-cream/80 hover:text-cream">
                  {p}
                </a>
              ))}
            </ContactCard>
            <ContactCard icon={Mail} title="Email us">
              <a href={`mailto:${company.email}`} className="link-line break-all text-cream/80 hover:text-cream">
                {company.email}
              </a>
            </ContactCard>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-cream/10 bg-cream/[0.04]">
            {showMap ? (
              <iframe
                title="Map showing Woodspec Interiors in Companypady, Aluva"
                src={`https://www.google.com/maps?q=${encodeURIComponent("Companypady, Aluva, Kerala 683106")}&output=embed`}
                className="h-64 w-full grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowMap(true)}
                className="flex h-24 w-full items-center justify-center gap-2 text-sm font-semibold text-cream/80 transition-colors hover:bg-cream/[0.06] hover:text-cream"
              >
                <MapPin className="size-4" aria-hidden /> Show map
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[1.75rem] border border-cream/10 bg-cream/[0.04] p-6 backdrop-blur-sm">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage-soft">
        <Icon className="size-4" aria-hidden /> {title}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
