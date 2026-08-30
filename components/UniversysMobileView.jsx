"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { UniversysFeaturesStack } from "./UniversysFeaturesStack";

export function UniversysMobileView({ project }) {
  return (
    <motion.div
      className="lg:hidden space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="space-y-4">
        <div className="relative aspect-[4/3] rounded-xl bg-white/10 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} - Dashboard Étudiant`}
            fill
            className="object-contain p-4"
            sizes="100vw"
          />
        </div>
        <div className="relative aspect-[4/3] rounded-xl bg-white/10 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} - Dashboard Professeur`}
            fill
            className="object-contain p-4"
            sizes="100vw"
          />
        </div>
        <div className="relative aspect-[3/4] rounded-xl bg-white/10 overflow-hidden max-w-xs mx-auto">
          <Image
            src={project.imageMobile}
            alt={`${project.title} - Version Mobile Étudiant`}
            fill
            className="object-contain p-4"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
        <p className="text-muted-fg/90 text-base leading-[1.8] whitespace-pre-wrap">
          {project.description}
        </p>
        <UniversysFeaturesStack project={project} />
      </div>
    </motion.div>
  );
}