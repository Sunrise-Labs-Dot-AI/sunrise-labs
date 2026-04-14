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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function PhoneFrame({ src, alt }: ProductScreenshotData) {
  return (
    <div className="mx-auto w-full max-w-[240px]">
      <div className="relative overflow-hidden rounded-[38px] border border-[var(--color-hairline)] bg-[rgba(10,12,20,0.85)] p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
        {/* Notch */}
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-4 w-24 -translate-x-1/2 rounded-b-2xl bg-[var(--color-ink)]" />
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[30px] bg-[var(--color-ink)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
