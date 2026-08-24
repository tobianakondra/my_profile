"use client";
import Photo from "@/components/Photo";
import { HeroContent } from "./HeroContent";
import { ScrollIndicator } from "./ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10" />
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5" />

      <div className="relative max-w-7xl px-4 sm:px-8 mx-auto py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24 gap-12">
          {/* Texte - HeroContent */}
          <div className="text-center lg:text-left order-2 lg:order-1 w-full lg:w-1/2">
            <HeroContent />
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[406px]">
              <Photo />
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;