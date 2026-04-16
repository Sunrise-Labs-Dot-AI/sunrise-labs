import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Raleway } from "next/font/google";
import { AtelierMark } from "@/components/AtelierMark";
import { DawnCoordinate } from "@/components/DawnCoordinate";
import { Grain } from "@/components/Grain";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunriselabs.ai"),
  title: "Sunrise Labs",
  description:
    "A small atelier building opinionated products for people and the agents that help them. Makers of Lodis and Sitter.",
  openGraph: {
    title: "Sunrise Labs",
    description:
      "A small atelier building opinionated products for people and the agents that help them.",
    type: "website",
    url: "https://sunriselabs.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunrise Labs",
    description:
      "A small atelier building opinionated products for people and the agents that help them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable} ${jetBrainsMono.variable}`}
    >
      <body className="relative min-h-screen bg-[var(--color-ink)] text-[var(--color-bone)]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Grain />
        <DawnCoordinate />
        <AtelierMark />
        {children}
      </body>
    </html>
  );
}
