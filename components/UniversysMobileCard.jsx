"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function UniversysMobileCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-white/5 border border-border/50 overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(29,78,216,0.1)]"
    >
      <div className="relative aspect-[9/16] min-h-[300px] lg:min-h-[400px]">
        <Image
          src={project.imageMobile}
          alt={`${project.title} - Version Mobile`}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-102"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}