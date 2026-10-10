export type Service = { slug: string; title: string; description: string; projectType: string };

export const projectTypes = [
  "Logo Design", "Branding", "Social Media Graphics", "YouTube Thumbnail",
  "Brochure Design", "Flyer Design", "Banner Design", "Vector Tracing", "Other",
] as const;
export type ProjectType = (typeof projectTypes)[number];

export const services: Service[] = [
  { slug: "logo", title: "Logo Design", projectType: "Logo Design", description: "Distinctive, memorable logos that express a brand's personality." },
  { slug: "brand", title: "Brand Identity Design", projectType: "Branding", description: "Cohesive identities built from logos, colors, typography, and supporting assets." },
  { slug: "social", title: "Social Media Graphics", projectType: "Social Media Graphics", description: "Engaging post designs for campaigns and day-to-day communication." },
  { slug: "thumbnail", title: "YouTube Thumbnail Design", projectType: "YouTube Thumbnail", description: "Thumbnails with strong composition and clear visual hierarchy." },
  { slug: "brochure", title: "Brochure Design", projectType: "Brochure Design", description: "Professional brochures presenting business information, products, and services." },
  { slug: "flyer", title: "Flyer Design", projectType: "Flyer Design", description: "Promotional flyers for campaigns, events, products, and offers." },
  { slug: "banner", title: "Banner Design", projectType: "Banner Design", description: "Banners for digital advertising, promotions, and brand communication." },
  { slug: "vector", title: "Vector Tracing", projectType: "Vector Tracing", description: "Clean, scalable vector artwork traced from suitable raster references." },
];
