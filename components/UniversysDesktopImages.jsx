"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function UniversysDesktopImages({ project }) {
  return (
    <div className="space-y-4">
      {/* Dashboard Étudiant */}
      <div className="relative aspect-[4/3] rounded-xl bg-white/10 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} - Dashboard Étudiant`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {/* Dashboard Professeur */}
      <div className="relative aspect-[4/3] rounded-xl bg-white/10 overflow-hidden">
        <Image
          src={project.imageProfessor}
          alt={`${project.title} - Dashboard Professeur`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}