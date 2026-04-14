"use client";

import { useEffect, useRef, type RefObject } from "react";

type Props = {
  /**
   * If provided, scroll progress is computed relative to this element's
   * position in the viewport (sticky-parent scroll range). If absent,
   * progress is computed against document scroll.
   */
  scrollTargetRef?: RefObject<HTMLElement | null>;
};

export function BackgroundVideo({ scrollTargetRef }: Props = {}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    let targetTime = 0;
    let seeking = false;

    // Prime the video: play briefly so the first frame decodes, then pause
    // at t=0. Without this, Safari/iOS show nothing until the first scroll.
    const prime = () => {
      v.play()
        .then(() => {
          v.pause();
          v.currentTime = 0;
        })
        .catch(() => {
          /* autoplay blocked — first frame may be missing until scroll */
        });
    };
    if (v.readyState >= 2) prime();
    else v.addEventListener("canplay", prime, { once: true });

    // Gate seeks behind the `seeked` event to prevent decode pile-up.
    const onSeeked = () => {
      seeking = false;
      if (Math.abs(v.currentTime - targetTime) > 0.02) {
        seeking = true;
        v.currentTime = targetTime;
      }
    };
    v.addEventListener("seeked", onSeeked);

    const computeProgress = (): number => {
      const target = scrollTargetRef?.current;
      if (target) {
        const rect = target.getBoundingClientRect();
        const range = target.offsetHeight - window.innerHeight;
        if (range <= 0) return 0;
        const scrolled = -rect.top;
        return Math.min(Math.max(scrolled / range, 0), 1);
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    };

    const onScroll = () => {
      const duration = v.duration;
      if (!duration || Number.isNaN(duration)) return;
      targetTime = computeProgress() * duration;
      if (!seeking) {
        seeking = true;
        v.currentTime = targetTime;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Fire once so the video reflects current scroll position on mount.
    onScroll();
    // Also fire once duration becomes known.
    v.addEventListener("loadedmetadata", onScroll, { once: true });

    return () => {
      v.removeEventListener("seeked", onSeeked);
      v.removeEventListener("canplay", prime);
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollTargetRef]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden bg-[var(--color-ink)]"
    >
      <video
        ref={ref}
        className="absolute left-1/2 top-1/2 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover [filter:brightness(0.85)_saturate(1.1)] motion-reduce:hidden"
        muted
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
