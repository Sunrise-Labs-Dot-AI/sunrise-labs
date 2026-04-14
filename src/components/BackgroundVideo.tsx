"use client";

import { useEffect, useRef } from "react";

export function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Some browsers (and React SSR hydration timing) skip the declarative
    // autoplay — explicitly kick playback after mount. Muted + playsInline
    // keeps this inside autoplay policy.
    v.muted = true;
    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay blocked. Leave the poster/first frame up; user can still
        // scroll, and the reduced-motion fallback already covers a11y.
      });
    };
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener("loadeddata", tryPlay, { once: true });
    }
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-[var(--color-ink)]">
      <video
        ref={ref}
        className="absolute left-1/2 top-1/2 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover [filter:brightness(0.85)_saturate(1.1)] motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/sunrise.mp4" type="video/mp4" />
      </video>
      {/* Reduced-motion fallback: a still gradient suggestive of dawn */}
      <div
        className="absolute inset-0 hidden motion-reduce:block"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, #f6a96a 0%, #8c4a2a 18%, #1a0f1a 55%, #050810 90%)",
        }}
      />
      {/* Vignette: keeps the center of the sunrise bright, fades edges to ink */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 55%, transparent 0%, transparent 45%, rgba(5,8,16,0.55) 80%, rgba(5,8,16,0.95) 100%)",
        }}
      />
      {/* Bottom fade, so the product log reads against ink */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60vh]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(5,8,16,0.6) 40%, var(--color-ink) 100%)",
        }}
      />
    </div>
  );
}
