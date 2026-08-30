"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function UniversysShowcase({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl p-8 bg-[#D9EBFF] overflow-hidden"
      style={{ backgroundColor: "#D9EBFF" }}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row gap-[47px]">
        {/* Left Zone - 2 stacked desktop images (~72%) */}
        <div className="lg:w-[72%] flex flex-col gap-[40px] flex-shrink-0">
          {/* Image 1: Dashboard Étudiant (Web) */}
          <div className="relative aspect-[2/1] w-full">
            <Image
              src={project.image}
              alt={`${project.title} - Dashboard Étudiant`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 72vw"
            />
          </div>
          {/* Image 2: Dashboard Professeur (Web) - using same image for now */}
          <div className="relative aspect-[2/1] w-full">
            <Image
              src={project.image}
              alt={`${project.title} - Dashboard Professeur`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 72vw"
            />
          </div>
        </div>

        {/* Right Zone - Mobile image (~28%), aligned top */}
        <div className="lg:w-[28%] flex flex-col items-start">
          <div className="relative aspect-[1/2.15] w-full max-h-[600px]">
            <Image
              src={project.imageMobile}
              alt={`${project.title} - Version Mobile Étudiant`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 28vw"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stack vertical */}
      <div className="lg:hidden flex flex-col gap-[40px]">
        {/* Image 1: Dashboard Étudiant */}
        <div className="relative aspect-[2/1] w-full">
          <Image
            src={project.image}
            alt={`${project.title} - Dashboard Étudiant`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        {/* Image 2: Dashboard Professeur */}
        <div className="relative aspect-[2/1] w-full">
          <Image
            src={project.image}
            alt={`${project.title} - Dashboard Professeur`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        {/* Image 3: Mobile */}
        <div className="relative aspect-[1/2.15] w-full max-h-[500px]">
          <Image
            src={project.imageMobile}
            alt={`${project.title} - Version Mobile Étudiant`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>
    </motion.div>
  );
}