"use client";

export function UniversysFeaturesStack({ project }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
  );
}