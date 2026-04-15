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

function formatDate(d: Date) {
  // ISO date in SF time, e.g. "2026-04-14"
  const parts = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "America/Los_Angeles",
  }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

export function DawnCoordinate() {
  const [sunrise, setSunrise] = useState("06:35");
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const times = SunCalc.getTimes(now, LAT, LNG);
    setSunrise(formatTime(times.sunrise));
    setDate(formatDate(now));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-6 z-20 hidden select-none font-mono text-[10px] leading-[1.6] tracking-[0.1em] text-[var(--color-fog)] md:block"
    >
      <div>{date}</div>
      <div>{sunrise} sunrise, sf</div>
    </div>
  );
}
