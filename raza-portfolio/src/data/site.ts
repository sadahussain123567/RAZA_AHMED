export const site = {
  name: "Muhammad Raza",
  title: "Graphic Designer & Visual Branding Specialist",
  location: "Hyderabad, Sindh, Pakistan",
  email: "Raza.chippa.5120@gmail.com",
  phones: {
    primary: { display: "+92 327 3202560", whatsapp: "https://wa.me/923273202560" },
    alternative: { display: "+92 310 3181829", whatsapp: "https://wa.me/923103181829" },
  },
  description:
    "Explore the graphic design portfolio of Muhammad Raza, a graphic designer based in Hyderabad, Pakistan, specializing in logo design, branding, social media graphics, thumbnails, brochures, flyers, and banners.",
} as const;

export type SocialLink = { label: string; url: string | null };

/** Set `url` to the real profile address. A null url renders as "not linked yet". */
export const socials: SocialLink[] = [
  { label: "Behance", url: null },
  { label: "Instagram", url: "https://www.instagram.com/_razaahmed_23/" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/raza-ahmed-111985402/" },
  { label: "Dribbble", url: null },
  { label: "Facebook", url: null },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;
