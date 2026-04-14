"use client";

import { useEffect, useState } from "react";
import SunCalc from "suncalc";

// San Francisco
const LAT = 37.7749;
const LNG = -122.4194;

function formatTime(d: Date) {
  return d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Los_Angeles",
  });
}

export function DawnCoordinate() {
  const [sunrise, setSunrise] = useState("06:35");

  useEffect(() => {
    const times = SunCalc.getTimes(new Date(), LAT, LNG);
    setSunrise(formatTime(times.sunrise));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-6 z-20 hidden select-none font-mono text-[10px] leading-[1.6] tracking-[0.1em] text-[var(--color-fog)] md:block"
    >
      <div>{sunrise}</div>
      <div>sunrise, sf</div>
    </div>
  );
}
