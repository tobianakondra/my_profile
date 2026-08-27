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
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col lg:flex-row rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_20px_40px_rgba(29,78,216,0.15)]"
    >
      {/* Image à gauche (sur desktop) ou en haut (mobile) */}
      <div className="relative lg:w-1/2 w-full min-h-[300px] lg:min-h-[400px] bg-primary/50 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/10 to-transparent lg:from-background/95 lg:via-background/5 lg:to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="px-3 py-1 rounded-lg bg-card/90 backdrop-blur border border-border text-xs font-mono font-bold text-accent">
            {project.num}
          </span>
          <span className="px-3 py-1 rounded-lg bg-card/90 backdrop-blur border border-border text-xs font-medium text-muted-fg capitalize">
            {project.category}
          </span>
        </div>
      </div>

      {/* Contenu à droite (sur desktop) ou en bas (mobile) */}
      <div className="lg:w-1/2 w-full p-6 lg:p-8 flex flex-col justify-between min-h-[300px] lg:min-h-[400px]">
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-fg text-base lg:text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-sm font-mono px-3 py-1 rounded-lg bg-primary/50 border border-border text-muted-fg group-hover:border-accent/30 group-hover:text-foreground transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-border pt-6">
          {project.live ? (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-accent hover:underline px-4 py-2"
            >
              Voir en ligne
              <BsArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ) : (
            <div className="flex items-center gap-2 text-sm font-medium text-muted-fg/50 px-4 py-2">
              <span>Projet privé</span>
            </div>
          )}

          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-primary/50 border border-border flex items-center justify-center text-muted-fg hover:text-accent hover:border-accent/50 hover:bg-primary transition-all duration-300"
              aria-label="Code source"
            >
              <BsGithub className="w-5 h-5" />
            </Link>
          ) : (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-11 h-11 rounded-xl bg-primary/50 border border-border/50 flex items-center justify-center text-muted-fg/50 cursor-not-allowed">
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

        <div className="flex flex-col gap-12">
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
            href="https://github.com/tobianakondra"
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