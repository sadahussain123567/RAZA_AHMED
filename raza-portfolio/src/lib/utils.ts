export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** SVG sources skip the image optimizer; raster images use it. */
export const isSvg = (src: string) => src.toLowerCase().endsWith(".svg");
