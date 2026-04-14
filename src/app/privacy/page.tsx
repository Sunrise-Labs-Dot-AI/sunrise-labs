import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Sunrise Labs",
  description:
    "Privacy policy for sunriselabs.ai — a marketing site for Sunrise Labs, a DBA of Heath Foundry, LLC.",
};

export default function PrivacyPage() {
  return (
    <main
      id="main"
      className="relative z-10 mx-auto w-full max-w-[680px] px-8 pb-32 pt-24 md:px-0 md:pt-32"
    >
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
          className="font-display font-extralight uppercase text-[var(--color-bone)] [letter-spacing:0.2em]"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Privacy
        </h1>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fog)]">
          last updated 2026-04-14
        </p>
      </header>

      <div className="space-y-8 text-[15px] leading-[1.75] text-[var(--color-bone)]/80 md:text-base">
        <p>
          This is the privacy policy for{" "}
          <span className="text-[var(--color-bone)]">sunriselabs.ai</span>, the
          marketing site for Sunrise Labs, a DBA of Heath Foundry, LLC, based
          in San Francisco, California. It&apos;s deliberately short — this
          site is just a few pages of text about what we&apos;re building. No
          user accounts, no payments, no product usage happens here.
        </p>

        <section>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-bone)]">
            What this site is
          </h2>
          <p>
            A marketing page describing Sunrise Labs&apos; products. There
            are no user accounts to sign up for, no payment processing, and
            no product functionality running here. Individual products
            (Engrams, Sitter) have their own sites and their own privacy
            terms when applicable.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-bone)]">
            What we collect
          </h2>
          <p>
            Right now, nothing. This site does not run Google Analytics,
            Vercel Analytics, Facebook Pixel, or any other tracking or
            advertising tool. We do not set advertising cookies. If we add
            basic analytics later (most likely Vercel Web Analytics, which
            aggregates page views, referrer, and device/browser info without
            using cookies or collecting IP addresses), we&apos;ll update this
            page. In any case, we will not sell or share personally
            identifiable information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-bone)]">
            If you email us
          </h2>
          <p>
            The only interactive thing on this site is an email link
            (hello@sunriselabs.ai, and a Sitter waitlist mailto). If you
            write in, we keep your name and email in our inbox so we can
            reply — same as any other email. We don&apos;t add you to a
            marketing list you didn&apos;t ask for, and we don&apos;t share
            your address with anyone else.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-bone)]">
            Hosting
          </h2>
          <p>
            The site is hosted on Vercel, which keeps standard server logs
            (request path, timestamp, IP address, user agent) for
            operational reasons like rate limiting and abuse prevention.
            Those logs are handled under Vercel&apos;s own privacy terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-bone)]">
            Questions, corrections, or deletion
          </h2>
          <p>
            Email{" "}
            <a
              href="mailto:james@sunriselabs.ai"
              className="editorial-link text-[var(--color-bone)]"
              style={{ ["--link-accent" as string]: "var(--color-horizon)" }}
            >
              james@sunriselabs.ai
            </a>{" "}
            and we&apos;ll take care of it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-bone)]">
            Governing law
          </h2>
          <p>
            This policy is governed by the laws of the State of California.
          </p>
        </section>
      </div>

      <footer className="mt-16 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fog)]">
        © 2026 Sunrise Labs · a DBA of Heath Foundry, LLC
      </footer>
    </main>
  );
}
