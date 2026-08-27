"use client";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

export function UniversysSidebar({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative rounded-2xl bg-white/5 border border-border/50 overflow-hidden p-6 lg:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(29,78,216,0.1)] flex flex-col h-full"
    >
      {/* Description - More prominent with better typography */}
      <div className="mb-10 flex-1">
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-5 tracking-tight">
          {project.title}
        </h3>
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-fg/90 text-lg lg:text-xl leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>
        </div>
      </div>

      {/* Features & Stack - More compact, side by side on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {/* Key Features */}
        <div className="rounded-xl bg-primary/30 border border-border/50 p-5">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Fonctionnalités clés
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-fg/80">
            {[
              "Emplois du temps temps réel",
              "Suivi pédagogique & notes",
              "Messagerie étudiants-enseignants",
              "Notifications push instantanées",
              "Mode hors-ligne (mobile)",
              "Tableau de bord administration",
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0 mt-1.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="rounded-xl bg-primary/30 border border-border/50 p-5">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Stack technique
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-primary/50 border border-border text-muted-fg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border/50 pt-6">
        {project.live ? (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 text-sm font-medium text-accent hover:underline px-4 py-3"
          >
            Voir en ligne
            <BsArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 text-sm font-medium text-muted-fg/50 px-4 py-3">
            <span>Projet privé</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}