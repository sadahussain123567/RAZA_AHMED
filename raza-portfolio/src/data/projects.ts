export const categories = [
  "Logo Design", "Branding", "Social Media Posts", "YouTube Thumbnails",
  "Brochure Design", "Flyer Design", "Banner Design", "Vector Tracing",
] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  /** Set only on sample pieces. Real work leaves this undefined and shows no badge. */
  demo?: "Demo Artwork" | "Concept Project";
  /** CSS aspect-ratio of the cover image, e.g. "4/5" (use the image's pixel width/height). */
  aspect: string;
  featured: boolean;
  cover: string;
  coverAlt: string;
  overview: string;
  /** Optional sections: add them and they appear on the case-study page. */
  brief?: string;
  concept?: string;
  process?: string[];
  /** Extra images (more slides, mockups). Leave empty to hide the gallery. */
  gallery: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "redbishop-media-branding",
    title: "redbishop MEDIA Brand Identity",
    category: "Branding",
    aspect: "2048/2956",
    featured: false,
    cover: "/images/portfolio/redbishop-media-branding.jpg",
    coverAlt: "redbishop MEDIA brand identity board with logo variations, business cards, and a wall sign",
    overview: "Brand identity presentation for redbishop MEDIA, showing the logo in full-color, reversed, and dark versions, with business card and signage mockups.",
    gallery: [],
  },
  {
    slug: "the-ai-network-logo",
    title: "The AI Network Logo",
    category: "Logo Design",
    aspect: "2259/2576",
    featured: false,
    cover: "/images/portfolio/the-ai-network-logo.jpg",
    coverAlt: "The AI Network logo with a chrome lion head and blue circuit lines",
    overview: "Logo design for The AI Network, combining a metallic lion head with glowing circuit lines and a custom wordmark on a dark background.",
    gallery: [],
  },
  {
    slug: "apex-asset-associate-logo",
    title: "Apex Asset Associate Logo",
    category: "Logo Design",
    aspect: "1/1",
    featured: false,
    cover: "/images/portfolio/apex-asset-associate-logo.jpg",
    coverAlt: "Two Apex Asset Associate logo versions with red peak symbols",
    overview: "Two logo directions for Apex Asset Associate, a real estate, construction and interiors brand, built from layered peak shapes in deep red.",
    gallery: [],
  },
  {
    slug: "fleeto-social-carousel",
    title: "Fleeto Social Media Carousel",
    category: "Social Media Posts",
    aspect: "1125/1390",
    featured: false,
    cover: "/images/portfolio/fleeto-carousel-1.jpg",
    coverAlt: "Fleeto carousel opening slide asking which car is right for you",
    overview: "Three-slide social media carousel for Fleeto: an opening question slide followed by two vehicle category slides, Exec and Comfort.",
    gallery: [
      { src: "/images/portfolio/fleeto-carousel-2.jpg", alt: "Fleeto carousel slide for the Exec category with a black Mercedes sedan" },
      { src: "/images/portfolio/fleeto-carousel-3.jpg", alt: "Fleeto carousel slide for the Comfort category with three black SUVs" },
    ],
  },
  {
    slug: "digital-marketing-post",
    title: "Digital Marketing Social Post",
    category: "Social Media Posts",
    aspect: "1080/1350",
    featured: false,
    cover: "/images/portfolio/digital-marketing-post.png",
    coverAlt: "Social post reading You can trust us, with laptop and phone mockups",
    overview: "Typography-led social media post with large purple gradient lettering and laptop and phone mockups, promoting digital marketing services.",
    gallery: [],
  },
  {
    slug: "youtube-thumbnail",
    title: "YouTube Thumbnail Design",
    category: "YouTube Thumbnails",
    aspect: "736/414",
    featured: false,
    cover: "/images/portfolio/youtube-thumbnail.jpg",
    coverAlt: "YouTube thumbnail with a smiling presenter, a shopping bag icon, and bold headline text",
    overview: "Thumbnail layout with a large dollar-amount headline, a green glow, and cash and e-commerce imagery framing the presenter.",
    gallery: [],
  },
  {
    slug: "titoki-banner",
    title: "TITOKI Speed and Custom Banner",
    category: "Banner Design",
    aspect: "1896/830",
    featured: true,
    cover: "/images/portfolio/titoki-banner.png",
    coverAlt: "TITOKI Speed and Custom banner in two black and white treatments",
    overview: "Banner artwork for TITOKI Speed and Custom with speed-line styling, shown in two treatments: a solid version and an outlined version.",
    gallery: [],
  },
  {
    slug: "coffee-shop-brochure",
    title: "Coffee Shop Tri-fold Brochure",
    category: "Brochure Design",
    aspect: "1024/1381",
    featured: false,
    cover: "/images/portfolio/coffee-shop-brochure.jpg",
    coverAlt: "Coffee shop tri-fold brochure, front and back, on a black background",
    overview: "Double-sided tri-fold brochure for a coffee shop with cover, about, menu, and services panels in a dark, warm palette. Logo and contact details are placeholder text.",
    gallery: [],
  },
  {
    slug: "sketch-to-vector-tracing",
    title: "Sketch to Vector Tracing",
    category: "Vector Tracing",
    aspect: "1576/998",
    featured: true,
    cover: "/images/portfolio/vector-tracing.jpg",
    coverAlt: "Black and white sketch next to a colored vector version of a cartoon cat head",
    overview: "Side-by-side comparison of a line sketch and the finished colored vector version of a cartoon cat character.",
    gallery: [],
  },
  // Sample piece: replace with a real flyer when one is available.
  {
    slug: "promo-flyer",
    title: "Promotional Flyer",
    category: "Flyer Design",
    demo: "Demo Artwork",
    aspect: "8/11",
    featured: false,
    cover: "/images/portfolio/promo-flyer.svg",
    coverAlt: "Sample event flyer layout with a chrome sphere and bold title",
    overview: "A sample event flyer with a strong top image, a bold two-line title, and a date button.",
    brief: "Illustrative brief: create a single-page flyer for a fictional event with one clear action.",
    concept: "The upper half carries the visual, while the lower half holds large type and a high-contrast date label.",
    process: ["Choose the key message", "Compose image and type", "Add date and contact area", "Export for print and screen"],
    gallery: [
      { src: "/images/portfolio/promo-flyer-mockup-1.svg", alt: "Sample flyer on a dark presentation background" },
      { src: "/images/portfolio/promo-flyer-mockup-2.svg", alt: "Sample flyer detail view with a full-size preview" },
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
