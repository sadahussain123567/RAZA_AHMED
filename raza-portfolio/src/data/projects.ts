export const categories = [
  "Logo Design", "Branding", "Social Media Posts", "YouTube Thumbnails",
  "Brochure Design", "Flyer Design", "Banner Design", "Vector Tracing",
] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  /** Shown as a badge. Replace sample entries with real work and set this to "Client Project" or similar. */
  label: string;
  /** CSS aspect-ratio for the cover, e.g. "4/5". */
  aspect: string;
  featured: boolean;
  cover: string;
  overview: string;
  brief: string;
  concept: string;
  process: string[];
  gallery: { src: string; alt: string }[];
};

/** All entries below are demonstration pieces, not verified professional work. Edit freely. */
export const projects: Project[] = [
  {
    slug: "minimal-logo",
    title: "Minimal Logo Design",
    category: "Logo Design",
    label: "Demo Artwork",
    aspect: "1/1",
    featured: false,
    cover: "/images/portfolio/minimal-logo.svg",
    overview: "A demonstration logo mark built from a circle and a rotated square, shown as a sample of the logo design format.",
    brief: "Illustrative brief: create a simple, memorable mark for a fictional studio that works at small sizes.",
    concept: "Two basic shapes overlap to suggest collaboration. A single gradient accent keeps the mark distinctive while the rest stays monochrome.",
    process: ["Sketch mark ideas with basic shapes", "Refine proportions and spacing", "Test in one color and at small sizes", "Prepare the final vector artwork"],
    gallery: [
      { src: "/images/portfolio/minimal-logo-mockup-1.svg", alt: "Minimal Logo Design shown on a dark presentation background" },
      { src: "/images/portfolio/minimal-logo-mockup-2.svg", alt: "Minimal Logo Design detail view with a full-size preview" },
    ],
  },
  {
    slug: "futuristic-brand",
    title: "Futuristic Brand Identity",
    category: "Branding",
    label: "Concept Project",
    aspect: "4/3",
    featured: true,
    cover: "/images/portfolio/futuristic-brand.svg",
    overview: "A concept identity for a fictional brand called Nova, covering a mark, a color palette, and a type direction.",
    brief: "Illustrative brief: define a visual identity for an imaginary technology brand with a dark, dimensional look.",
    concept: "A chrome sphere with an orbit line acts as the central symbol. The palette pairs deep navy with purple and cyan accents.",
    process: ["Gather references and define a mood", "Explore symbol and palette directions", "Build the identity sheet", "Prepare supporting brand assets"],
    gallery: [
      { src: "/images/portfolio/futuristic-brand-mockup-1.svg", alt: "Futuristic Brand Identity shown on a dark presentation background" },
      { src: "/images/portfolio/futuristic-brand-mockup-2.svg", alt: "Futuristic Brand Identity detail view with a full-size preview" },
    ],
  },
  {
    slug: "social-campaign",
    title: "Social Media Campaign",
    category: "Social Media Posts",
    label: "Concept Project",
    aspect: "4/5",
    featured: false,
    cover: "/images/portfolio/social-campaign.svg",
    overview: "A sample social post layout that shows hierarchy for a headline, supporting lines, and a call to action.",
    brief: "Illustrative brief: design a post template that can be reused across a fictional campaign.",
    concept: "A bold gradient field carries stacked text blocks and one clear button shape, so the message reads at a glance on a small screen.",
    process: ["Define the message and format", "Set up a reusable grid", "Design the headline and CTA hierarchy", "Export for the target platform"],
    gallery: [
      { src: "/images/portfolio/social-campaign-mockup-1.svg", alt: "Social Media Campaign shown on a dark presentation background" },
      { src: "/images/portfolio/social-campaign-mockup-2.svg", alt: "Social Media Campaign detail view with a full-size preview" },
    ],
  },
  {
    slug: "thumbnail-collection",
    title: "YouTube Thumbnail Collection",
    category: "YouTube Thumbnails",
    label: "Demo Artwork",
    aspect: "16/9",
    featured: true,
    cover: "/images/portfolio/thumbnail-collection.svg",
    overview: "A sample thumbnail layout that uses large type and a strong focal shape to stay legible at small sizes.",
    brief: "Illustrative brief: design a thumbnail that communicates its topic in under two seconds.",
    concept: "Oversized two-word type sits against a bright circle and play shape, with high contrast between text and background.",
    process: ["Pick the single idea to communicate", "Compose the focal shape and text", "Check legibility at small size", "Export at 1280 x 720"],
    gallery: [
      { src: "/images/portfolio/thumbnail-collection-mockup-1.svg", alt: "YouTube Thumbnail Collection shown on a dark presentation background" },
      { src: "/images/portfolio/thumbnail-collection-mockup-2.svg", alt: "YouTube Thumbnail Collection detail view with a full-size preview" },
    ],
  },
  {
    slug: "corporate-brochure",
    title: "Corporate Brochure Design",
    category: "Brochure Design",
    label: "Concept Project",
    aspect: "3/2",
    featured: false,
    cover: "/images/portfolio/corporate-brochure.svg",
    overview: "A tri-fold brochure layout showing a cover panel, an information panel, and a feature panel.",
    brief: "Illustrative brief: present a fictional company's services in a clear three-panel format.",
    concept: "A color-blocked cover leads into text-led inner panels with generous spacing, so dense information stays easy to scan.",
    process: ["Plan content for each panel", "Set grid, type, and spacing", "Lay out the panels", "Prepare print-ready files"],
    gallery: [
      { src: "/images/portfolio/corporate-brochure-mockup-1.svg", alt: "Corporate Brochure Design shown on a dark presentation background" },
      { src: "/images/portfolio/corporate-brochure-mockup-2.svg", alt: "Corporate Brochure Design detail view with a full-size preview" },
    ],
  },
  {
    slug: "promo-flyer",
    title: "Promotional Flyer",
    category: "Flyer Design",
    label: "Demo Artwork",
    aspect: "8/11",
    featured: false,
    cover: "/images/portfolio/promo-flyer.svg",
    overview: "A sample event flyer with a strong top image, a bold two-line title, and a date button.",
    brief: "Illustrative brief: create a single-page flyer for a fictional event with one clear action.",
    concept: "The upper half carries the visual, while the lower half holds large type and a high-contrast date label.",
    process: ["Choose the key message", "Compose image and type", "Add date and contact area", "Export for print and screen"],
    gallery: [
      { src: "/images/portfolio/promo-flyer-mockup-1.svg", alt: "Promotional Flyer shown on a dark presentation background" },
      { src: "/images/portfolio/promo-flyer-mockup-2.svg", alt: "Promotional Flyer detail view with a full-size preview" },
    ],
  },
  {
    slug: "ad-banner",
    title: "Digital Advertising Banner",
    category: "Banner Design",
    label: "Concept Project",
    aspect: "3/1",
    featured: true,
    cover: "/images/portfolio/ad-banner.svg",
    overview: "A wide web banner layout with a headline, a short supporting line, and a call-to-action button.",
    brief: "Illustrative brief: design a wide ad banner for a fictional seasonal promotion.",
    concept: "Text sits on the left with a glowing sphere on the right, keeping the message and the visual from competing.",
    process: ["Set the message and size", "Place headline, support line, and button", "Balance the visual against the text", "Export size variants"],
    gallery: [
      { src: "/images/portfolio/ad-banner-mockup-1.svg", alt: "Digital Advertising Banner shown on a dark presentation background" },
      { src: "/images/portfolio/ad-banner-mockup-2.svg", alt: "Digital Advertising Banner detail view with a full-size preview" },
    ],
  },
  {
    slug: "vector-illustration",
    title: "Vector Illustration",
    category: "Vector Tracing",
    label: "Demo Artwork",
    aspect: "3/4",
    featured: false,
    cover: "/images/portfolio/vector-illustration.svg",
    overview: "A layered vector landscape that shows clean shapes and flat color, as a sample of vector artwork.",
    brief: "Illustrative brief: build a clean, scalable illustration from simple layered shapes.",
    concept: "Overlapping hills in three tones sit under a gradient sun, so the image holds up at any size.",
    process: ["Block out the main shapes", "Layer shapes and set colors", "Clean up anchor points", "Export as scalable vector files"],
    gallery: [
      { src: "/images/portfolio/vector-illustration-mockup-1.svg", alt: "Vector Illustration shown on a dark presentation background" },
      { src: "/images/portfolio/vector-illustration-mockup-2.svg", alt: "Vector Illustration detail view with a full-size preview" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function getNeighbors(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    next: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
}
