"use client";
import { motion } from "framer-motion";
import { HeroCTA } from "./HeroCTA";
import { HeroSocialLinks } from "./HeroSocialLinks";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center lg:text-left max-w-3xl"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/50 border border-accent/20 text-accent text-sm font-medium mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Disponible pour missions — Freelance / CDI
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6"
      >
        Richard Claude Emile Diatta
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg sm:text-xl text-muted-fg max-w-2xl mb-8 leading-relaxed"
      >
        Développeur Fullstack spécialisé React, Next.js & Node.js —
        Architectures scalables, temps réel (Firebase, Supabase) & CI/CD.
      </motion.p>

      <HeroCTA />
      <HeroSocialLinks />
    </motion.div>
  );
}