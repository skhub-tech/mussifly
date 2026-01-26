import { Description } from "@/components/landing/Description";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Screenshots } from "@/components/landing/Screenshots";
import { Navbar } from "@/components/landing/Navbar";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Description />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

