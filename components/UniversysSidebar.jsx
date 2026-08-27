"use client";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function UniversysSidebar({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative rounded-2xl bg-white/5 border border-border/50 overflow-hidden p-6 lg:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(29,78,216,0.1)] flex flex-col"
    >
      <div className="mb-8">
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
          {project.title}
        </h3>
        <p className="text-muted-fg text-base lg:text-lg leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="rounded-xl bg-primary/30 border border-border/50 p-5">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Fonctionnalités clés
          </h4>
          <ul className="space-y-3 text-sm text-muted-fg">
            {[
              "Emplois du temps temps réel",
              "Suivi pédagogique & notes",
              "Messagerie étudiants-enseignants",
              "Notifications push instantanées",
              "Mode hors-ligne (mobile)",
              "Tableau de bord administration",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-primary/30 border border-border/50 p-5">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
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

      <div className="border-t border-border/50 pt-6 mt-auto">
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