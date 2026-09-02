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
import { UniversysShowcase } from "./UniversysShowcase";
import { LongrichShowcase } from "./LongrichShowcase";
import { RichLabsShowcase } from "./RichLabsShowcase";
import { UniversysSidebar } from "./UniversysSidebar";

const projects = [
  {
    num: "01",
    category: "EdTech / Temps réel",
    title: "Universys",
    description:
      "La gestion universitaire (emplois du temps, suivi des cours, communication étudiants-enseignants) est souvent fragmentée, peu réactive et manque d'outils modernes centralisés. Conception d'une plateforme web et mobile centralisant la gouvernance académique. Elle permet la synchronisation en temps réel des emplois du temps, le suivi pédagogique et la communication fluide, réduisant le désordre organisationnel et améliorant l'expérience des étudiants et des administrations.",
    stack: ["React", "React Native", "Tailwind CSS", "Firebase", "Temps réel"],
    image: "/assets/universys.png",
    imageProfessor: "/assets/universys-professor.png",
    imageMobile: "/assets/universys-mobile-student.png",
    live: "https://universys-3604b.web.app",
    github: "",
  },
  {
    num: "02",
    category: "E-commerce / Temps réel",
    title: "Longrich",
    description:
      "Le Défi\nLes consommateurs en ligne font souvent face à des parcours d'achat lents, complexes et peu sécurisés, ce qui entraîne un taux d'abandon de panier élevé et une perte de confiance vis-à-vis du vendeur. Pour les vendeurs, la gestion des stocks et la mise à jour des produits en temps réel manquent souvent de réactivité.\n\nLa Solution\nLongrich a été conçue comme une solution e-commerce moderne axée sur la simplicité et la vitesse. L'application offre une interface épurée et intuitive qui guide l'utilisateur sans friction du catalogue jusqu'à la validation de la commande, tout en garantissant une synchronisation instantanée des données.",
    stack: ["React", "Tailwind CSS", "Firebase"],
    features: [
      "Parcours d'achat ultra-fluide : Réduction maximale du nombre d'étapes nécessaires pour finaliser une commande et maximiser la conversion.",
      "Synchronisation en temps réel : Les stocks, le statut des commandes et le catalogue se rafraîchissent instantanément sans rechargement de page pour l'acheteur et l'administrateur.",
      "Espace d'administration dédié : Un tableau de bord complet permettant de piloter l'activité, d'ajouter ou modifier des produits, et de suivre l'état de traitement des commandes en quelques clics.",
      "Design responsive & accessible : Expérience utilisateur fluide et optimisée aussi bien pour les acheteurs sur mobile que pour les administrateurs sur ordinateur.",
    ],
    image: "/assets/longrich-home.png",
    imageCart: "/assets/longrich-cart.png",
    imageMobile: "/assets/longrich-mobile.png",
    live: "https://longrich-3212d.web.app",
    github: "https://github.com/tobianakondra/Longrich-E-commerce-App",
  },
  {
    num: "03",
    category: "Éducation / Linux",
    title: "RichLabs",
    description:
      "Le Défi\nPour de nombreux étudiants et débutants en informatique, l'apprentissage de Linux et de l'administration système peut sembler abstrait, intimidant et fragmenté. La diversité des distributions et la complexité des concepts système découragent souvent les apprenants face à des documentations denses et peu interactives.\n\nLa Solution\nRichLabs centralise et démocratise la découverte de l'écosystème Linux à travers une plateforme web immersive et structurée. Elle transforme la prise en main de l'administration système en un parcours guidé, clair et engageant, permettant d'explorer les spécificités des différentes distributions et de se former aux fondamentaux du système.",
    stack: ["PHP 8.x", "MySQL", "Tailwind CSS", "DaisyUI 5", "Lucide Icons", "Apache"],
    features: [
      "Parcours d'apprentissage structuré : Une organisation claire pour maîtriser les concepts clés et les spécificités de chaque distribution Linux sans se perdre.",
      "Interface moderne & intuitive : Un environnement visuel épuré et réactif conçu pour rendre la documentation technique agréable et accessible.",
      "Architecture légère & performante : Traitement rapide des requêtes et gestion fluide des données pour garantir une navigation instantanée.",
    ],
    image: "/assets/richlabs-home.png",
    imageDistro: "/assets/richlabs-distro.png",
    imageMobile: "/assets/richlabs-mobile.png",
    live: "https://richlabs.free.nf",
    github: "https://github.com/tobianakondra/richlabs",
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
      className="group relative flex flex-col lg:flex-row rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_20px_40px_rgba(29,78,216,0.15)]"
    >
      <div className="relative lg:w-1/2 w-full bg-primary/50 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-102 p-4 lg:p-8"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="px-3 py-1 rounded-lg bg-card/90 backdrop-blur border border-border text-xs font-mono font-bold text-accent">
            {project.num}
          </span>
          <span className="px-3 py-1 rounded-lg bg-card/90 backdrop-blur border border-border text-xs font-medium text-muted-fg capitalize">
            {project.category}
          </span>
        </div>
      </div>

      <div className="lg:w-1/2 w-full p-6 lg:p-8 flex flex-col justify-between">
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

const UniversysShowcaseWrapper = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <UniversysShowcase project={project} />
    </motion.div>
  );
};

const LongrichShowcaseWrapper = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <LongrichShowcase project={project} />
    </motion.div>
  );
};

const RichLabsShowcaseWrapper = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <RichLabsShowcase project={project} />
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
          <UniversysShowcaseWrapper project={projects[0]} />
          <LongrichShowcaseWrapper project={projects[1]} />
          <RichLabsShowcaseWrapper project={projects[2]} />
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