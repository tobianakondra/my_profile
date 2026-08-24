"use client";
import { HeroContent } from "./HeroContent";
import { ScrollIndicator } from "./ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10" />
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5" />

      <div className="relative max-w-7xl px-4 sm:px-8 mx-auto py-20 lg:py-32">
        <HeroContent />
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;