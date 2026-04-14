"use client";

import { useEffect, useRef } from "react";

export function BackgroundVideo() {
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

    // Gate seeks behind the `seeked` event to prevent decode pile-up. This is
    // the anti-jitter trick from the legacy implementation: only one seek is
    // in flight at a time; if scroll moved on while we were seeking, kick the
    // next seek from inside the seeked handler.
    const onSeeked = () => {
      seeking = false;
      if (Math.abs(v.currentTime - targetTime) > 0.02) {
        seeking = true;
        v.currentTime = targetTime;
      }
    };
    v.addEventListener("seeked", onSeeked);

    const onScroll = () => {
      const duration = v.duration;
      if (!duration || Number.isNaN(duration)) return;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      targetTime = progress * duration;

      if (!seeking) {
        seeking = true;
        v.currentTime = targetTime;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Fire once so the video reflects current scroll position on mount /
    // back-nav (e.g. when bfcache restores a mid-page scroll state).
    onScroll();

    return () => {
      v.removeEventListener("seeked", onSeeked);
      v.removeEventListener("canplay", prime);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-[var(--color-ink)]">
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
