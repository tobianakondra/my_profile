"use client";

import { UniversysFeaturesStack } from "./UniversysFeaturesStack";
import { UniversysMobilePreview } from "./UniversysMobilePreview";

export function UniversysDescriptionCTA({ project }) {
  return (
    <div className="space-y-8">
      {/* Title & Description */}
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted-fg/90 text-base lg:text-lg leading-[1.8] whitespace-pre-wrap">
          {project.description}
        </p>
      </div>

      {/* Key Features & Stack */}
      <UniversysFeaturesStack project={project} />

      {/* Mobile preview on desktop */}
      <UniversysMobilePreview project={project} />

      {/* CTA */}
      <div className="pt-4 border-t border-border/50">
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
      </div>
    </div>
  );
}