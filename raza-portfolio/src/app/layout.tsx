import type { Metadata } from "next";
import "@fontsource-variable/syne";
import "@fontsource-variable/instrument-sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { site } from "@/data/site";
import "./globals.css";

const title = "Muhammad Raza | Graphic Designer & Visual Branding Specialist";

export const metadata: Metadata = {
  title,
  description: site.description,
  openGraph: { title, description: site.description, type: "website", locale: "en_US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
