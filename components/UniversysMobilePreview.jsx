"use client";
import Image from "next/image";

export function UniversysMobilePreview({ project }) {
  return (
    <div className="hidden lg:block">
      <div className="relative aspect-[3/4] rounded-xl bg-white/10 overflow-hidden max-w-xs mx-auto">
        <Image
          src={project.imageMobile}
          alt={`${project.title} - Version Mobile Étudiant`}
          fill
          className="object-contain p-4"
          sizes="200px"
        />
      </div>
    </div>
  );
}