/**
 * All site content lives here. Every fact (services, offers, testimonials,
 * address, phone numbers, social links) is carried over from the previous site.
 */
// Every size of every photo (built by scripts/optimize-images.py), keyed by file name.
const files = import.meta.glob("../assets/img/*.webp", { eager: true, import: "default" });

/** Responsive image: { src, srcSet, full, alt } for a photo name like "hero" or "g-kitchen". */
function photo(name, alt = "") {
  const sizes = Object.entries(files)
    .map(([path, url]) => [path.match(/\/([a-z0-9-]+)-(\d+)\.webp$/), url])
    .filter(([m]) => m && m[1] === name)
    .map(([m, url]) => [Number(m[2]), url])
    .sort((a, b) => a[0] - b[0]);
  if (!sizes.length) throw new Error(`No image named ${name}`);
  const mid = sizes[Math.min(1, sizes.length - 1)][1];
  return {
    src: mid,
    srcSet: sizes.length > 1 ? sizes.map(([w, url]) => `${url} ${w}w`).join(", ") : undefined,
    full: sizes.at(-1)[1],
    alt,
  };
}

export const company = {
  name: "Woodspec",
  fullName: "Woodspec Project Link",
  tradingAs: "Woodspec Interiors",
  url: "https://www.woodspecproject.com",
  email: "info@woodspecproject.com",
  phones: ["+91 9544430756", "+91 9544430754"],
  whatsapp: "919544430754",
  whatsappMessage: "Hello! I am interested in your interior design services.",
  address: {
    lines: ["Metro Pillar No. 112", "CM Building No. 231, Companypady", "Aluva - 6, Pin 683106"],
    street: "Metro Pillar No. 112, CM Building No. 231, Companypady",
    locality: "Aluva",
    region: "Kerala",
    postalCode: "683106",
    country: "IN",
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61564078615806",
    youtube: "https://youtube.com/@woodspecpro",
    instagram: "https://www.instagram.com/woodspec_project",
  },
};

export const whatsappLink = (text = company.whatsappMessage) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "CM Building, Companypady, Aluva, Kerala 683106",
)}`;

export const nav = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "offer", label: "What we offer" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Interior design studio · Aluva, Kochi",
  title: ["Bespoke interiors,", "crafted to be lived in."],
  lead: "Woodspec Interiors creates bespoke interior designs that blend aesthetics with functionality, delivered by a team of passionate designers and craftsmen.",
  image: photo("hero", "Sage green sofa in a living room with a charcoal wall and wooden floor"),
};

export const highlights = ["Interior Design", "Furniture Design", "Home Renovation", "Office Renovation", "Customized Budget Packages", "1000+ Color Options", "10 Year Warranty on Plyboards", "On Time Delivery"];

export const about = {
  title: "About Woodspec Interiors",
  body: [
    "Woodspec Interiors specializes in creating bespoke interior designs that blend aesthetics with functionality.",
    "With a team of passionate designers and craftsmen, we deliver exceptional spaces tailored to meet your unique needs, from the first consultation to the final walkthrough.",
  ],
  images: [
    photo("about-1", "Bright living room with a white sofa, fireplace and wall-mounted TV"),
    photo("about-2", "Open kitchen and dining area with white cabinetry"),
    photo("about-3", "Home office with a black desk and leather chairs"),
  ],
};

export const services = [
  {
    title: "Interior Design",
    text: "From concept to execution, we create interior designs that reflect your style and enhance your living spaces.",
    image: photo("svc-interior", "Elegant lounge with chandeliers and mirrored walls"),
  },
  {
    title: "Furniture Design",
    text: "Crafting bespoke furniture pieces that are functional, durable, and aesthetically pleasing.",
    image: photo("svc-furniture", "Round bed on a raised platform with warm lighting"),
  },
  {
    title: "Home and Office Renovation",
    text: "Choose us for innovative home renovation services and breathe new life into your home or office space.",
    image: photo("svc-renovation", "Modern office with a curved desk and city view"),
  },
];

export const offers = [
  {
    icon: "wallet",
    title: "Customized Budget Packages",
    text: "Packages designed around the unique needs and preferences of each client, giving maximum value without compromising on quality.",
  },
  {
    icon: "clock",
    title: "On Time Delivery",
    text: "Efficient project management keeps every deadline, with high standards of quality and attention to detail.",
  },
  {
    icon: "palette",
    stat: "1000+",
    statLabel: "color options",
    title: "1000+ Color Options",
    text: "An extensive range of over 1000 colors to help you find the perfect palette for your space and style.",
  },
  {
    icon: "shield",
    stat: "10 yr",
    statLabel: "plyboard warranty",
    title: "10 Year Warranty on Plyboards",
    text: "Durability and peace of mind: our plyboards carry a 10-year warranty, a long-term commitment to quality.",
  },
];

export const offerImage = photo("offer-bg", "Dark bedroom with a black upholstered bed and sculpted stone wall");

export const specialties = [
  {
    title: "Innovative Solutions",
    text: "Creative, precise solutions for complex design challenges, tailored to each client and the way they live and work.",
  },
  {
    title: "Quick Turnaround",
    text: "Streamlined processes and efficient project management deliver projects swiftly, without compromising on quality or craftsmanship.",
  },
  {
    title: "Client-Centric Approach",
    text: "We collaborate closely from the initial consultation to the final walkthrough, so your vision is realized in every detail.",
  },
];

export const vision = {
  quote: "We are driven by a passion for creating transformative spaces that enrich lives and inspire communities.",
  body: "Our philosophy revolves around meticulous craftsmanship and innovative solutions tailored to each client. From initial consultation to final implementation, we ensure a seamless journey characterized by creativity, transparency, and unparalleled attention to detail.",
  image: photo("vision-bg", ""),
};

export const gallery = [
  { ...photo("g-kitchen", "Kitchen with wooden cabinets and a stone island"), caption: "Kitchen", size: "wide" },
  { ...photo("g-bedroom", "Dark bedroom with a tufted headboard and arched windows"), caption: "Bedroom", size: "tall" },
  { ...photo("g-living", "Living room with a cream sofa and large windows"), caption: "Living room" },
  { ...photo("g-green", "Dining nook with deep green walls"), caption: "Dining nook" },
  { ...photo("g-blue", "Blue-panelled living room with a white tufted sofa"), caption: "Living room" },
  { ...photo("g-wardrobe", "Bedroom with built-in white wardrobes"), caption: "Wardrobes", size: "tall" },
  { ...photo("g-dining", "Dining room with grey chairs and blue curtains"), caption: "Dining" },
  { ...photo("g-shutters", "Sitting room with wooden window shutters"), caption: "Window shutters", size: "wide" },
  { ...photo("g-console", "Entryway with a rattan console and round mirror"), caption: "Entryway" },
  { ...photo("g-lounge", "Lounge with a curved sofa and green armchair"), caption: "Lounge" },
  { ...photo("g-office", "Home office with a black desk and pendant lights"), caption: "Workspace" },
  { ...photo("g-light", "Sunlit living room with slatted screens"), caption: "Living room" },
];

export const testimonials = [
  {
    name: "Abdu Rahman",
    role: "Client",
    quote: "Working with WoodSpec has been a game-changer for us. Their attention to detail and creativity have transformed our office space beyond our expectations.",
  },
  {
    name: "James Samuel",
    role: "Client",
    quote: "I hired WoodSpec for our home renovation project, and I couldn’t be happier with the results. They listened to our needs and delivered outstanding quality.",
  },
  {
    name: "Bharath",
    role: "Client",
    quote: "The custom furniture they designed for us is not only beautiful but also functional. It fits perfectly into our home and has become a centerpiece of our living room.",
  },
];

export const contact = {
  title: "Let’s design your space.",
  lead: "Tell us about your home or office. We’ll get back to you with ideas and a package that fits your budget.",
  image: photo("contact-bg", ""),
};
