export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen w-full flex-col items-center"
    >
      {/* Wordmark sits on the horizon line of the sunrise (~62% down) */}
      <div className="absolute left-1/2 top-[62vh] w-full -translate-x-1/2 -translate-y-1/2 px-6 text-center">
        <h1
          id="hero-heading"
          className="kindle font-display font-extralight uppercase text-[var(--color-bone)] [letter-spacing:0.6em] [text-shadow:0_0_60px_rgba(0,0,0,0.5)]"
          style={{ fontSize: "clamp(1.5rem, 5vw, 4.5rem)" }}
        >
          Sunrise Labs
        </h1>
        <p className="kindle kindle-delay-1 mt-6 font-sans text-sm text-[var(--color-bone)]/75 md:text-base">
          a tiny studio in San Francisco making things we wished existed.
        </p>
      </div>

      {/* Scroll caption, bottom center */}
      <div className="kindle kindle-delay-3 absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-bone)]/50">
        scroll ↓
      </div>
    </section>
  );
}
