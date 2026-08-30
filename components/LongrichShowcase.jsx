"use client";
import { motion } from "framer-motion";
import { LongrichDesktopImages } from "./LongrichDesktopImages";
import { LongrichDescriptionCTA } from "./LongrichDescriptionCTA";
import { LongrichMobileView } from "./LongrichMobileView";

export function LongrichShowcase({ project }) {
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
        <LongrichDesktopImages project={project} />
      </div>

      {/* Right: Description & Details Column - Desktop only */}
      <div className="hidden lg:block space-y-8">
        <LongrichDescriptionCTA project={project} />
      </div>

      {/* Mobile View - Mobile only */}
      <LongrichMobileView project={project} />
    </motion.div>
  );
}