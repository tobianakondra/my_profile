"use client";
import { motion } from "framer-motion";
import { RichLabsDesktopImages } from "./RichLabsDesktopImages";
import { RichLabsDescriptionCTA } from "./RichLabsDescriptionCTA";
import { RichLabsMobileView } from "./RichLabsMobileView";

export function RichLabsShowcase({ project }) {
  const _title = project.title;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12"
    >
      {/* Left: Compact Images Column - Desktop only */}
      <div className="hidden lg:block space-y-6">
        <RichLabsDesktopImages project={project} />
      </div>

      {/* Right: Description & Details Column - Desktop only */}
      <div className="hidden lg:block space-y-8">
        <RichLabsDescriptionCTA project={project} />
      </div>

      {/* Mobile View - Mobile only */}
      <RichLabsMobileView project={project} />
    </motion.div>
  );
}