import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <main id="main" className="relative z-10">
      <Hero />
      <Products />
      <Footer />
    </main>
  );
}
