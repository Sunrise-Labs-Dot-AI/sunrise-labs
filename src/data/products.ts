export type ProductStatus = "public" | "private-beta" | "coming-soon";

export type ProductCta = {
  label: string;
  href: string;
};

export type ProductScreenshot = {
  src: string;
  alt: string;
  frame: "browser" | "phone";
  /** Browser frame only: the domain shown in the fake address bar. */
  domain?: string;
};

export type Product = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel?: string;
  primaryCta: ProductCta;
  secondaryCta?: ProductCta;
  accent: string;
  metaTags: string[];
  screenshot?: ProductScreenshot;
};

export const products: Product[] = [
  {
    slug: "engrams",
    index: "01",
    name: "Engrams",
    tagline: "A memory that travels with you, across every AI tool you use.",
    description:
      "One portable memory for every AI tool you use. Engrams Local is open-source and runs on your own machine — fully readable, fully yours, free forever. Engrams Cloud is the hosted version for syncing across devices (paid eventually, free for now while we're building it out).",
    status: "public",
    primaryCta: { label: "getengrams.com", href: "https://getengrams.com" },
    secondaryCta: {
      label: "on github",
      href: "https://github.com/Sunrise-Labs-Dot-AI/engrams",
    },
    accent: "#f6a96a",
    metaTags: ["for ai nerds", "open source", "cloud free for now"],
    screenshot: {
      src: "/products/engrams.png",
      alt: "Engrams web dashboard",
      frame: "browser",
      domain: "getengrams.com",
    },
  },
  {
    slug: "sitter",
    index: "02",
    name: "Sitter",
    tagline: "Babysitter coordination without the twelve-message group chat.",
    description:
      "Book, confirm, and pay the sitters you already trust — entirely over text. No new app for anyone to download, no accounts for sitters to forget. Launching in public beta soon; get on the list and we'll reach out when it's your turn.",
    status: "private-beta",
    statusLabel: "public beta soon",
    primaryCta: {
      label: "get early access",
      href: "mailto:hello@sunriselabs.ai?subject=Sitter%20waitlist",
    },
    accent: "#f2c88c",
    metaTags: ["for busy parents", "sms-native", "launching soon"],
    screenshot: {
      src: "/products/sitter.png",
      alt: "Sitter SMS conversation",
      frame: "phone",
    },
  },
];
