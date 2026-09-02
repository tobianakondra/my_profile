"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function HeroSocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <a
        href="https://github.com/tobianakondra"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-xl bg-primary/50 border border-border flex items-center justify-center text-muted-fg hover:text-accent hover:border-accent/50 hover:bg-primary transition-all duration-300"
        aria-label="GitHub"
      >
        <FiGithub className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/richard-claude-emile-diatta-328209327/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-xl bg-primary/50 border border-border flex items-center justify-center text-muted-fg hover:text-accent hover:border-accent/50 hover:bg-primary transition-all duration-300"
        aria-label="LinkedIn"
      >
        <FiLinkedin className="w-5 h-5" />
      </a>
      <a
        href="mailto:privatehat80@gmail.com"
        className="w-11 h-11 rounded-xl bg-primary/50 border border-border flex items-center justify-center text-muted-fg hover:text-accent hover:border-accent/50 hover:bg-primary transition-all duration-300"
        aria-label="Email"
      >
        <FiMail className="w-5 h-5" />
      </a>
    </div>
  );
}