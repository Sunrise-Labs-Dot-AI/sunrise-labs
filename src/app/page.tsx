import { Footer } from "@/components/Footer";
import { Products } from "@/components/Products";
import { ScrollJackedHero } from "@/components/ScrollJackedHero";

export default function Home() {
  return (
    <main id="main" className="relative z-10">
      <ScrollJackedHero />
      <section className="relative bg-[var(--color-ink)]">
        <Products />
        <Footer />
      </section>
    </main>
  );
}
