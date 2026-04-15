"use client";

import { useRef } from "react";
import { BackgroundVideo } from "./BackgroundVideo";
import { Hero } from "./Hero";

export function ScrollJackedHero() {
  const shellRef = useRef<HTMLDivElement>(null);
  return (
    // Tall wrapper defines the scroll range the video is mapped against.
    // 220vh ≈ 1.2 viewports of scroll progress the full sunrise. Under
    // prefers-reduced-motion the shell collapses to 100vh so there's no
    // extra scrolling to nowhere for users who opted out.
    <div
      ref={shellRef}
      className="relative h-[220vh] motion-reduce:h-screen"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <BackgroundVideo scrollTargetRef={shellRef} />
        <Hero />
      </div>
    </div>
  );
}
