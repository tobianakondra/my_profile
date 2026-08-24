"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  { value: "fullstack", label: "Développement Fullstack (React/Next.js/Node.js)" },
  { value: "backend", label: "API & Backend (Node.js, PostgreSQL, Prisma)" },
  { value: "realtime", label: "Temps réel & Collaboratif (Firebase, Supabase)" },
  { value: "mobile", label: "Application Mobile (React Native, Expo)" },
  { value: "devops", label: "DevOps & CI/CD (Docker, GitHub Actions, Vercel)" },
  { value: "consulting", label: "Conseil & Architecture technique" },
  { value: "other", label: "Autre / Projet sur mesure" },
];

export function ContactServiceSelect({ value, onValueChange }) {
  return (
    <Select value={value} onValueChange={onValueChange} className="w-full mb-4">
      <SelectTrigger className="bg-primary/50 border-border text-foreground focus:border-accent rounded-xl transition-all duration-300">
        <SelectValue placeholder="Type de projet" />
      </SelectTrigger>
      <SelectContent className="bg-card border-border text-foreground">
        <SelectGroup>
          <SelectLabel className="text-accent/70 text-xs">Mes services</SelectLabel>
          {services.map((s) => (
            <SelectItem
              key={s.value}
              value={s.value}
              className="text-muted-fg focus:bg-accent/10 focus:text-accent cursor-pointer"
            >
              {s.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}