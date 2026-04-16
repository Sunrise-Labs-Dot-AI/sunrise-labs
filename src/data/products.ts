export type ProductStatus = "public" | "private-beta" | "coming-soon";

export type ProductCta = {
  label: string;
  href: string;
};

export type ProductScreenshot = {
  alt: string;
  frame: "browser" | "phone";
  /** Single image source. Mutually exclusive with `slides`. */
  src?: string;
  /**
   * Multiple image sources, cycled with a cross-fade. Mutually exclusive
   * with `src`. Phone frame only.
   */
  slides?: string[];
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
    slug: "lodis",
    index: "01",
    name: "Lodis",
    tagline: "A memory that travels with you, across every AI tool you use.",
    description:
      "One portable memory for every AI tool you use. Lodis Local is open-source and runs on your own machine — fully readable, fully yours, free forever. Lodis Cloud is the hosted version for syncing across devices (paid eventually, free for now while we're building it out).",
    status: "public",
    primaryCta: { label: "lodis.ai", href: "https://lodis.ai" },
    secondaryCta: {
      label: "on github",
      href: "https://github.com/Sunrise-Labs-Dot-AI/lodis",
    },
    accent: "#f6a96a",
    metaTags: ["for ai nerds", "open source", "cloud free for now"],
    screenshot: {
      src: "/products/lodis.png",
      alt: "Lodis web dashboard",
      frame: "browser",
      domain: "lodis.ai",
    },
  },
  {
    slug: "sitter",
    index: "02",
    name: "Sitter",
    tagline: "Your sitters, texted in order, until someone says yes.",
    description:
      "Book, confirm, and pay the sitters you already trust — entirely over text. No new app for anyone to download, no accounts for sitters to forget. Launching in public beta soon; get on the list and we'll reach out when it's your turn.",
    status: "private-beta",
    statusLabel: "public beta soon",
    primaryCta: {
      label: "join the waitlist",
      href: "https://trysitter.com/signup",
    },
    accent: "#f2c88c",
    metaTags: ["for busy parents", "sms-native", "launching soon"],
    screenshot: {
      alt: "Sitter app screens",
      frame: "phone",
      slides: [
        "/products/sitter/booking-detail.png",
        "/products/sitter/sms-conversation.png",
        "/products/sitter/new-booking.png",
        "/products/sitter/sitters.png",
        "/products/sitter/scenarios.png",
        "/products/sitter/calendar.png",
      ],
    },
  },
  {
    slug: "gauge-fitness",
    index: "03",
    name: "Gauge",
    tagline: "An AI coach that actually knows your training.",
    description:
      "Gauge tracks your workouts, monitors recovery signals, and adapts your program in real time. The AI coach sees your PRs, readiness, and history — then adjusts volume, intensity, and exercise selection so every session fits how you're showing up that day. Private beta on iOS.",
    status: "private-beta",
    primaryCta: {
      label: "request an invite",
      href: "mailto:mornin@sunriselabs.ai?subject=Gauge beta invite",
    },
    secondaryCta: { label: "learn more", href: "/gauge-fitness" },
    accent: "#D97706",
    metaTags: ["for lifters", "ai-coached", "ios private beta"],
    screenshot: {
      alt: "Gauge Fitness app screens",
      frame: "phone",
      slides: [
        "/products/gauge/01-dashboard.png",
        "/products/gauge/02-active-workout.png",
        "/products/gauge/04-ai-coach.png",
        "/products/gauge/06-exercise-progression.png",
        "/products/gauge/07-history.png",
      ],
    },
  },
];
