import type { Metadata } from "next";
import Link from "next/link";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gauge Fitness — Sunrise Labs",
  description:
    "An AI-coached fitness app that tracks your workouts, monitors recovery, and adapts your program in real time. Private beta on iOS.",
  openGraph: {
    title: "Gauge Fitness — Sunrise Labs",
    description:
      "An AI-coached fitness app that tracks your workouts, monitors recovery, and adapts your program in real time.",
    type: "website",
    url: "https://sunriselabs.ai/gauge-fitness",
  },
};

const heroSlides = [
  "/products/gauge/01-dashboard.png",
  "/products/gauge/02-active-workout.png",
  "/products/gauge/04-ai-coach.png",
  "/products/gauge/06-exercise-progression.png",
  "/products/gauge/07-history.png",
];

const featureSections = [
  {
    index: "01",
    title: "Your dashboard knows how you slept",
    lead: "Recovery-aware training, every morning.",
    body: "Sleep, HRV, resting heart rate, and step count feed into a daily readiness score. Green means go. Yellow means dial it back. Red means active recovery only. The app auto-adjusts your workout volume and intensity based on the score — no manual overrides needed.",
    screenshot: "/products/gauge/01-dashboard.png",
    alt: "Gauge dashboard with readiness score and biosignal trends",
  },
  {
    index: "02",
    title: "Log sets without thinking about it",
    lead: "Previous performance is always visible.",
    body: "Last session's weights and reps show up automatically so you know what to beat. Tap to log. Rest timer kicks in. Move to the next set. Exercise pills let you jump between movements. The whole session is designed to keep your phone in your pocket as much as possible.",
    screenshot: "/products/gauge/02-active-workout.png",
    alt: "Active workout screen logging bench press sets",
  },
  {
    index: "03",
    title: "A coach that has read every one of your workouts",
    lead: "Not a chatbot with a personality. A coach with your data.",
    body: "The AI coach sees your full training history, current program, PRs, readiness, and post-workout feedback. It builds periodized programs, swaps exercises for injuries, adjusts volume mid-cycle, and answers technique questions — all grounded in what you've actually done, not generic templates.",
    screenshot: "/products/gauge/04-ai-coach.png",
    alt: "AI coach conversation with personalized training advice",
  },
  {
    index: "04",
    title: "Watch your strength curve bend upward",
    lead: "Estimated 1RM, volume trends, PR detection.",
    body: "Every exercise gets a progression page with an estimated 1RM chart, session volume bars, and a full history of what you lifted and when. PR detection is automatic. Trends tell you where you're improving and where you've stalled — so you can ask your coach what to do about it.",
    screenshot: "/products/gauge/06-exercise-progression.png",
    alt: "Exercise progression chart showing estimated 1RM over time",
  },
  {
    index: "05",
    title: "Your training log, structured and searchable",
    lead: "Every workout you've ever done, expandable in one tap.",
    body: "Full history with date, duration, volume, set count. Expand any session to see every exercise and set. PR indicators show where you hit lifetime bests. A \"do this workout again\" button lets you repeat sessions you liked. Post-workout notes and ratings are preserved too.",
    screenshot: "/products/gauge/07-history.png",
    alt: "Workout history with expandable session cards",
  },
];

const howItWorks = [
  {
    step: "01",
    label: "Tell the coach about yourself",
    detail:
      "Goals, experience, schedule, injuries. A 5-minute conversation, not a form.",
  },
  {
    step: "02",
    label: "Get a program built for you",
    detail:
      "Periodized, equipment-aware, scheduled to your available days. Not a cookie-cutter template.",
  },
  {
    step: "03",
    label: "Train and log",
    detail:
      "Follow the workout, log your sets, rate how it felt. Takes 30 seconds of screen time per session.",
  },
  {
    step: "04",
    label: "The program adapts",
    detail:
      "Recovery data, feedback, and performance feed back into the next session. The coach adjusts automatically.",
  },
];

export default function GaugeFitnessPage() {
  return (
    <main
      id="main"
      className="relative z-10 min-h-screen bg-[var(--color-ink)]"
      style={{ ["--product-accent" as string]: "#D97706" }}
    >
      {/* ── Hero ── */}
      <section className="mx-auto w-full max-w-[1040px] px-8 pb-0 pt-24 md:px-10 md:pt-32">
        <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-bone)]/60">
          <Link
            href="/"
            className="editorial-link"
            style={{ ["--link-accent" as string]: "var(--color-horizon)" }}
          >
            &larr; sunrise labs
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_280px] md:items-start md:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-2 font-sans text-xs text-[var(--color-bone)]/70">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#D97706" }}
              />
              in private beta &middot; ios
            </div>

            <h1
              className="font-display font-extralight uppercase text-[var(--color-bone)] [letter-spacing:0.15em]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Gauge
            </h1>

            <p className="mt-3 font-display text-xl text-[var(--color-bone)]/85 md:text-2xl">
              An AI coach that actually knows your training.
            </p>

            <p className="mt-6 max-w-xl text-base leading-[1.75] text-[var(--color-bone)]/65 md:text-[17px]">
              Most fitness apps are glorified spreadsheets. Most AI coaches know
              nothing about you. Gauge is different: it tracks your workouts,
              reads your recovery signals, and adapts your program in real time.
              Every session is built for how you&apos;re showing up that day.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4">
              <a
                href="mailto:mornin@sunriselabs.ai?subject=Gauge beta invite"
                className="editorial-link font-mono text-xs uppercase tracking-[0.2em]"
                style={{ ["--link-accent" as string]: "#D97706" }}
              >
                <span aria-hidden="true">&rarr;</span>
                request an invite
              </a>
            </div>

            <footer className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fog)]">
              for lifters &middot; ai-coached &middot; free during beta
            </footer>
          </div>

          <div className="md:pt-2">
            <ProductScreenshot
              alt="Gauge Fitness app screens"
              frame="phone"
              slides={heroSlides}
            />
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="mx-auto mt-24 w-full max-w-[1040px] px-8 md:mt-36 md:px-10">
        <hr className="horizon-rule" />

        <div className="mb-12 mt-14 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-bone)]/60 md:mb-16">
          <span
            aria-hidden="true"
            className="inline-block h-px w-8 bg-[var(--color-hairline)]"
          />
          <span>&mdash; how it works</span>
        </div>

        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {howItWorks.map((s) => (
            <div key={s.step}>
              <div
                className="mb-3 font-mono text-2xl font-light"
                style={{ color: "#D97706" }}
              >
                {s.step}
              </div>
              <h3 className="font-display text-base font-light text-[var(--color-bone)] md:text-lg">
                {s.label}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-[var(--color-bone)]/55">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature sections with screenshots ── */}
      <section className="mx-auto mt-24 w-full max-w-[1040px] px-8 md:mt-36 md:px-10">
        <hr className="horizon-rule" />

        <div className="mb-12 mt-14 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-bone)]/60 md:mb-16">
          <span
            aria-hidden="true"
            className="inline-block h-px w-8 bg-[var(--color-hairline)]"
          />
          <span>&mdash; what you get</span>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {featureSections.map((f, i) => {
            const flipped = i % 2 === 1;
            return (
              <div
                key={f.index}
                className="grid items-center gap-10 md:gap-16"
                style={{
                  gridTemplateColumns: flipped
                    ? "240px minmax(0, 1fr)"
                    : "minmax(0, 1fr) 240px",
                }}
              >
                {flipped ? (
                  <>
                    {/* Screenshot first */}
                    <div>
                      <ProductScreenshot
                        alt={f.alt}
                        frame="phone"
                        src={f.screenshot}
                      />
                    </div>
                    {/* Text second */}
                    <div>
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-fog)]">
                        {f.index}
                      </div>
                      <h3 className="font-display text-xl font-light text-[var(--color-bone)] md:text-2xl">
                        {f.title}
                      </h3>
                      <p className="mt-2 font-display text-sm italic text-[var(--color-bone)]/60 md:text-base">
                        {f.lead}
                      </p>
                      <p className="mt-4 text-sm leading-[1.75] text-[var(--color-bone)]/55 md:text-[15px]">
                        {f.body}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text first */}
                    <div>
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-fog)]">
                        {f.index}
                      </div>
                      <h3 className="font-display text-xl font-light text-[var(--color-bone)] md:text-2xl">
                        {f.title}
                      </h3>
                      <p className="mt-2 font-display text-sm italic text-[var(--color-bone)]/60 md:text-base">
                        {f.lead}
                      </p>
                      <p className="mt-4 text-sm leading-[1.75] text-[var(--color-bone)]/55 md:text-[15px]">
                        {f.body}
                      </p>
                    </div>
                    {/* Screenshot second */}
                    <div>
                      <ProductScreenshot
                        alt={f.alt}
                        frame="phone"
                        src={f.screenshot}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto mt-24 w-full max-w-[1040px] px-8 md:mt-36 md:px-10">
        <hr className="horizon-rule" />
        <div className="py-20 text-center md:py-28">
          <h2
            className="font-display font-extralight text-[var(--color-bone)] [letter-spacing:0.1em]"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Want in?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-[1.75] text-[var(--color-bone)]/60">
            Gauge is free while we build it. Drop a line and
            we&apos;ll get you on TestFlight.
          </p>
          <div className="mt-8">
            <a
              href="mailto:mornin@sunriselabs.ai?subject=Gauge beta invite"
              className="editorial-link font-mono text-xs uppercase tracking-[0.2em]"
              style={{ ["--link-accent" as string]: "#D97706" }}
            >
              <span aria-hidden="true">&rarr;</span>
              mornin@sunriselabs.ai
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <div className="mx-auto w-full max-w-[1040px] px-8 md:px-10">
        <Footer />
      </div>
    </main>
  );
}
