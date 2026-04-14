import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Products() {
  return (
    <section
      aria-labelledby="products-heading"
      className="relative mx-auto w-full max-w-[720px] px-8 py-24 md:px-0 md:py-36 md:[margin-left:calc(50%-320px+40px)]"
    >
      <div className="mb-10 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-bone)]/60 md:mb-14">
        <span aria-hidden="true" className="inline-block h-px w-8 bg-[var(--color-hairline)]" />
        <span>— what we've made so far</span>
      </div>
      <h2 id="products-heading" className="sr-only">
        Products from Sunrise Labs
      </h2>
      <div className="flex flex-col">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
