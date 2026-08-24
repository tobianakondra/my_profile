"use client";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  { icon: FaCode, label: "Frontend", stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { icon: FaServer, label: "Backend", stack: ["Node.js", "Express", "REST API", "GraphQL"] },
  { icon: FaDatabase, label: "Données & Temps réel", stack: ["Firebase", "Supabase", "PostgreSQL", "Prisma"] },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-surface border-y border-border">
      <div className="max-w-7xl px-4 sm:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <span className="text-accent font-medium tracking-wide text-sm mb-3 block">À propos</span>
          <h2 className="h1 text-foreground mb-4">Ce que je fais</h2>
          <p className="text-lg text-muted-fg leading-relaxed">
            Développeur Fullstack avec 3+ ans d'expérience, je conçois et déploie
            des applications web et mobiles performantes, de l'architecture à la production.
            Mon approche : code propre, scalabilité native et expérience développeur soignée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{skill.label}</h3>
                <ul className="space-y-1.5">
                  {skill.stack.map((tech, i) => (
                    <li key={i} className="text-sm text-muted-fg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-16 lg:mt-24 p-8 rounded-2xl bg-primary/50 border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Mon parcours en bref</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="text-3xl font-bold text-accent">3+</p>
              <p className="text-sm text-muted-fg mt-1">Années d'expérience</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="text-3xl font-bold text-accent">20+</p>
              <p className="text-sm text-muted-fg mt-1">Projets livrés</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-fg mt-1">Taux de satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;