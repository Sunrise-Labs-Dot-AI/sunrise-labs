"use client";

import { useEffect, useState } from "react";
import type { ProductScreenshot as ProductScreenshotData } from "@/data/products";

export function ProductScreenshot(props: ProductScreenshotData) {
  if (props.frame === "phone") {
    return <PhoneFrame {...props} />;
  }
  return <BrowserFrame {...props} />;
}

function BrowserFrame({ src, alt, domain }: ProductScreenshotData) {
  return (
    <div className="w-full overflow-hidden rounded-md border border-[var(--color-hairline)] bg-[rgba(10,12,20,0.85)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
      {/* Chrome */}
      <div className="flex items-center gap-3 border-b border-[var(--color-hairline)] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-bone)]/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-bone)]/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-bone)]/20" />
        </div>
        {domain ? (
          <div className="mx-auto rounded-sm bg-[var(--color-bone)]/5 px-3 py-0.5 font-mono text-[10px] tracking-[0.1em] text-[var(--color-bone)]/60">
            {domain}
          </div>
        ) : null}
        <div className="w-8" />
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[16/10] w-full bg-[var(--color-ink)]">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>
    </div>
  );
}

function PhoneFrame({ src, slides, alt }: ProductScreenshotData) {
  const sources = slides && slides.length > 0 ? slides : src ? [src] : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sources.length <= 1) return;
    const interval = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % sources.length);
    }, 3500);
    return () => window.clearInterval(interval);
  }, [sources.length]);

  return (
    <div className="mx-auto w-full max-w-[240px]">
      <div className="relative overflow-hidden rounded-[38px] border border-[var(--color-hairline)] bg-[rgba(10,12,20,0.85)] p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
        {/* Notch */}
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-4 w-24 -translate-x-1/2 rounded-b-2xl bg-[var(--color-ink)]" />
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[30px] bg-[var(--color-ink)]">
          {sources.map((s, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s}
              src={s}
              alt={alt}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none"
              style={{ opacity: i === activeIndex ? 1 : 0 }}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
      {sources.length > 1 ? (
        <div
          aria-hidden="true"
          className="mt-4 flex justify-center gap-1.5 motion-reduce:hidden"
        >
          {sources.map((s, i) => (
            <span
              key={s}
              className="h-1 w-1 rounded-full transition-colors duration-500"
              style={{
                backgroundColor:
                  i === activeIndex
                    ? "var(--color-horizon)"
                    : "rgba(245,239,226,0.2)",
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
