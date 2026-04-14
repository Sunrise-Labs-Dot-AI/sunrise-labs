export function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-[1040px] px-8 pb-20 pt-6 md:px-10">
      <hr className="horizon-rule mb-10" />
      <div className="flex flex-col items-start gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fog)]">
        <div>© 2026 SUNRISE LABS</div>
        <div>SAN FRANCISCO&nbsp;&nbsp;·&nbsp;&nbsp;EST. 2025</div>
        <a
          href="mailto:hello@sunriselabs.ai"
          className="editorial-link mt-2 normal-case tracking-[0.1em] text-[var(--color-bone)]/80"
          style={{ ["--link-accent" as string]: "var(--color-horizon)" }}
        >
          hello@sunriselabs.ai
        </a>
        <a
          href="/privacy"
          className="editorial-link mt-1 normal-case tracking-[0.1em] text-[var(--color-bone)]/60"
          style={{ ["--link-accent" as string]: "var(--color-horizon)" }}
        >
          privacy
        </a>
      </div>
    </footer>
  );
}
