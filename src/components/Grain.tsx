export function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.06] mix-blend-overlay"
    >
      <svg className="h-full w-full">
        <filter id="sunrise-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#sunrise-grain)" />
      </svg>
    </div>
  );
}
