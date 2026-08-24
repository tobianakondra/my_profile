"use client";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const info = [
  {
    icon: FaEnvelope,
    title: "Email",
    description: "privatehat80@gmail.com",
    href: "mailto:privatehat80@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    title: "Téléphone",
    description: "+221 78 173 73 85",
    href: "tel:+221781737385",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Localisation",
    description: "Ziguinchor — Disponible à distance",
    href: null,
  },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-sm font-semibold tracking-wide">Disponible immédiatement</span>
        </div>
        <h4 className="text-lg font-semibold text-foreground mb-1">Richard Claude Emile Diatta</h4>
        <p className="text-muted-fg text-sm mb-4">Développeur Fullstack · France</p>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Node.js", "Firebase", "Supabase"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-primary/50 border border-border text-muted-fg"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="space-y-3"
      >
        {info.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-[0_10px_30px_rgba(29,78,216,0.1)] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-muted-fg/60 text-xs uppercase tracking-wider mb-0.5">{item.title}</p>
                    <p className="text-foreground font-medium text-sm group-hover:text-accent transition-colors">{item.description}</p>
                  </div>
                </a>
              ) : (
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-muted-fg/60 text-xs uppercase tracking-wider mb-0.5">{item.title}</p>
                    <p className="text-foreground font-medium text-sm">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex gap-3 pt-2"
      >
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center justify-center gap-2 rounded-xl bg-card border border-border p-3 text-muted-fg hover:text-accent hover:border-accent/50 hover:shadow-[0_10px_30px_rgba(29,78,216,0.1)] transition-all duration-300 text-sm font-medium"
            >
              <Icon className="text-xl" />
              <span>{social.label}</span>
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}