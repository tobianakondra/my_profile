"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function UniversysScreenshotsCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-white/5 border border-border/50 overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(29,78,216,0.1)]"
    >
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur text-xs font-mono font-bold text-white flex items-center gap-2">
          <span className="text-accent">01</span>
          <span className="text-white/80">|</span>
          <span>EdTech / Temps réel</span>
        </span>
      </div>
      <div className="flex flex-col lg:flex-row h-full min-h-[400px] lg:min-h-[500px]">
        {/* Web screenshot - 2/3 width on desktop */}
        <div className="lg:w-2/3 w-full relative lg:border-r lg:border-border/50">
          <Image
            src={project.image}
            alt={`${project.title} - Version Web`}
            fill
            className="object-contain p-4 lg:p-6 transition-transform duration-500 group-hover:scale-102"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        {/* Mobile screenshot - 1/3 width on desktop */}
        <div className="lg:w-1/3 w-full relative lg:block hidden">
          <Image
            src={project.imageMobile}
            alt={`${project.title} - Version Mobile`}
            fill
            className="object-contain p-4 lg:p-6 transition-transform duration-500 group-hover:scale-102"
            sizes="(max-width: 1024px) 100vw, 17vw"
          />
        </div>
      </div>
    </motion.div>
  );
}