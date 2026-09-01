"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function RichLabsDesktopImages({ project }) {
  return (
    <div className="space-y-4">
      {/* Home page */}
      <div className="relative aspect-[4/3] rounded-xl bg-white/10 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} - Page d'accueil`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {/* Distributions page */}
      <div className="relative aspect-[4/3] rounded-xl bg-white/10 overflow-hidden">
        <Image
          src={project.imageDistro}
          alt={`${project.title} - Distributions Linux`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}