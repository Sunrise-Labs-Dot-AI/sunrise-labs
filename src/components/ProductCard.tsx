"use client";

import { useEffect, useRef } from "react";
import type { Product, ProductStatus } from "@/data/products";

const statusMeta: Record<ProductStatus, { label: string; filled: boolean }> = {
  public: { label: "live", filled: true },
  "private-beta": { label: "in private beta", filled: true },
  "coming-soon": { label: "soon", filled: false },
};

function isExternal(href: string) {
  return href.startsWith("http");
}

export function ProductCard({ product }: { product: Product }) {
  const status = statusMeta[product.status];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="reveal relative py-14 md:py-20"
      style={{ ["--product-accent" as string]: product.accent }}
    >
      {/* Top horizon rule */}
      <hr className="horizon-rule" />

      {/* Marginalia: Roman numeral, left */}
      <div
        aria-hidden="true"
        className="absolute -left-2 top-14 font-mono text-xs tracking-[0.15em] text-[var(--color-fog)] md:-left-14 md:top-20 md:text-sm"
      >
        {product.index}
      </div>

      {/* Status chip, top right */}
      <div className="absolute right-0 top-14 flex items-center gap-2 font-sans text-xs text-[var(--color-bone)]/70 md:top-20">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: status.filled ? product.accent : "transparent",
            border: status.filled ? undefined : "1px solid var(--color-fog)",
          }}
        />
        {product.statusLabel ?? status.label}
      </div>

      {/* Product name */}
      <h3
        className="mt-6 font-display font-extralight uppercase text-[var(--color-bone)] [letter-spacing:0.15em] md:mt-10"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {product.name}
      </h3>

      {/* Tagline */}
      <p className="mt-3 font-display text-xl text-[var(--color-bone)]/85 md:text-2xl">
        {product.tagline}
      </p>

      {/* Body */}
      <p className="mt-6 max-w-xl text-base leading-[1.75] text-[var(--color-bone)]/65 md:text-[17px]">
        {product.description}
      </p>

      {/* CTAs as editorial links */}
      <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4">
        <a
          href={product.primaryCta.href}
          className="editorial-link font-mono text-xs uppercase tracking-[0.2em]"
          style={{ ["--link-accent" as string]: product.accent }}
          {...(isExternal(product.primaryCta.href)
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          <span aria-hidden="true">→</span>
          {product.primaryCta.label}
        </a>
        {product.secondaryCta ? (
          <a
            href={product.secondaryCta.href}
            className="editorial-link font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-bone)]/70"
            style={{ ["--link-accent" as string]: "rgba(245,239,226,0.45)" }}
            {...(isExternal(product.secondaryCta.href)
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            <span aria-hidden="true">→</span>
            {product.secondaryCta.label}
          </a>
        ) : null}
      </div>

      {/* Meta footer */}
      <footer className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fog)]">
        {product.metaTags.join("  ·  ")}
      </footer>

      {/* Bottom horizon rule */}
      <hr className="horizon-rule mt-14 md:mt-20" />
    </article>
  );
}
