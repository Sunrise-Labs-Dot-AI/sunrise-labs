import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Sunrise Labs",
  description:
    "Sunrise Labs is one person in San Francisco building software at weird hours.",
};

export default function AboutPage() {
  return (
    <main
      id="main"
      className="relative z-10 min-h-screen bg-[var(--color-ink)] pb-32 pt-24 md:pt-32"
    >
      <div className="mx-auto w-full max-w-[680px] px-8 md:px-0">
        <header className="mb-12">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-bone)]/60">
            <Link
              href="/"
              className="editorial-link"
              style={{ ["--link-accent" as string]: "var(--color-horizon)" }}
            >
              ← sunrise labs
            </Link>
          </div>
          <h1
            className="font-display font-extralight lowercase text-[var(--color-bone)] [letter-spacing:0.2em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            about
          </h1>
        </header>

        <div className="space-y-6 text-[15px] leading-[1.85] text-[var(--color-bone)]/80 md:text-base">
          <p className="text-[var(--color-bone)]">
            hi, I&apos;m james. sunrise labs is just me, in san francisco,
            building software at weird hours.
          </p>

          <p>
            the weird hours kind of pick themselves: I have three kids under
            three, so when one of them wakes up at 5:47 I&apos;m up. and on
            the other end of the day, building with AI right now is so fun
            that I&apos;ll look up from a problem and the sky is pink. either
            way I&apos;m at the desk before the sun is, basically every day.
            that&apos;s where the name came from. felt right.
          </p>

          <p>
            what&apos;s come out of those hours so far: engrams (a portable
            memory layer for AI agents) and sitter (an SMS-only way to
            coordinate babysitters). both started as things I wanted to use
            myself and then turned out to be things other people wanted too.
            neither will be free if it costs me money to run, but I&apos;m
            not building these to flip them — I&apos;m building them to learn
            and because honestly it&apos;s the most fun thing I can think of
            doing right now.
          </p>

          <p>
            say hi:{" "}
            <a
              href="mailto:mornin%27@sunriselabs.ai"
              className="editorial-link text-[var(--color-bone)]"
              style={{ ["--link-accent" as string]: "var(--color-horizon)" }}
            >
              mornin&apos;@sunriselabs.ai
            </a>
            . that&apos;s me.
          </p>
        </div>

        <footer className="mt-16 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fog)]">
          © 2026 Sunrise Labs · a DBA of Heath Foundry, LLC
        </footer>
      </div>
    </main>
  );
}
