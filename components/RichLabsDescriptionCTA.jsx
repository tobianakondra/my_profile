"use client";

import { BsGithub } from "react-icons/bs";
import { RichLabsFeatures } from "./RichLabsFeatures";
import { RichLabsMobilePreview } from "./RichLabsMobilePreview";

export function RichLabsDescriptionCTA({ project }) {
  return (
    <div className="space-y-8">
      {/* Title & Description */}
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 tracking-tight">
          {project.title}
        </h3>
        <div className="prose prose-invert max-w-none text-muted-fg/90 text-base lg:text-lg leading-[1.8] whitespace-pre-wrap">
          {project.description}
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Fonctionnalités clés
        </h4>
        <RichLabsFeatures project={project} />
      </div>

      {/* Stack */}
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

      {/* Mobile preview on desktop */}
      <RichLabsMobilePreview project={project} />

      {/* CTA */}
      <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row gap-4">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-accent hover:underline px-4 py-3"
          >
            Voir en ligne →
          </a>
        ) : (
          <span className="text-sm font-medium text-muted-fg/50">Projet privé</span>
        )}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-fg hover:text-accent hover:border-accent/50 border border-border px-4 py-3 rounded-lg transition-colors"
          >
            <BsGithub className="w-5 h-5" />
            <span>Voir sur GitHub</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}