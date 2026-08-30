"use client";

export function LongrichFeatures({ project }) {
  return (
    <div className="space-y-4">
      {project.features?.map((feature, i) => (
        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-primary/30 border border-border/50">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
          <p className="text-sm text-muted-fg/80 leading-relaxed">{feature}</p>
        </div>
      ))}
    </div>
  );
}