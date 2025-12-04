<<<<<<< HEAD
import { Description } from "@/components/landing/Description";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Screenshots } from "@/components/landing/Screenshots";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Hero />
      <Features />
      <Screenshots />
      <Description />
      <FAQ />
      <Footer />
    </div>
  );
=======
import { Description } from "@/components/landing/Description";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Screenshots } from "@/components/landing/Screenshots";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Hero />
      <Features />
      <Screenshots />
      <Description />
      <FAQ />
      <Footer />
    </div>
  );
>>>>>>> 3c0bdd2eae304b2a15a2ff0ab5a6a4d84aa1b791
}