"use client";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "SaaS / Fullstack",
    title: "Projet en cours",
    description: "Application SaaS complète avec authentification, paiements, dashboard temps réel et architecture multi-tenant.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
    image: "/assets/project-placeholder.svg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Temps réel / Mobile",
    title: "App collaborative",
    description: "Application mobile cross-platform avec synchronisation temps réel, notifications push et mode hors-ligne.",
    stack: ["React Native", "Expo", "Firebase", "Supabase", "TypeScript"],
    image: "/assets/project-placeholder.svg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Dashboard / Analytics",
    title: "Plateforme analytics",
    description: "Dashboard d'analyse de données avec visualisations interactives, exports automatisés et RBAC avancé.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Recharts", "Docker", "GitHub Actions"],
    image: "/assets/project-placeholder.svg",
    live: "",
    github: "",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_20px_40px_rgba(29,78,216,0.15)]"
    >
      <div className="relative aspect-video bg-primary/50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
            <span className="text-2xl font-bold text-accent">{project.num}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-lg bg-card/90 backdrop-blur border border-border text-xs font-mono font-bold text-accent">
            {project.num}
          </span>
          <span className="px-3 py-1 rounded-lg bg-card/90 backdrop-blur border border-border text-xs font-medium text-muted-fg capitalize">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-fg text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-primary/50 border border-border text-muted-fg group-hover:border-accent/30 group-hover:text-foreground transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 border-t border-border pt-4">
          {project.live ? (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Voir en ligne
              <BsArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-muted-fg/50">
              <span>Projet privé</span>
            </div>
          )}

          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-primary/50 border border-border flex items-center justify-center text-muted-fg hover:text-accent hover:border-accent/50 hover:bg-primary transition-all duration-300"
              aria-label="Code source"
            >
              <BsGithub className="w-5 h-5" />
            </Link>
          ) : (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-10 h-10 rounded-xl bg-primary/50 border border-border/50 flex items-center justify-center text-muted-fg/50 cursor-not-allowed">
                    <BsGithub className="w-5 h-5" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-card text-foreground text-xs font-medium border border-border">
                  <p>Dépôt privé</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projets = () => {
  return (
    <section id="projets" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl px-4 sm:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-accent font-medium tracking-wide text-sm mb-3 block">Projets sélectionnés</span>
          <h2 className="h1 text-foreground">Réalisations récentes</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="text-muted-fg mb-4">D'autres projets arrivent bientôt...</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            Voir mon GitHub
            <BsArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projets;