"use client";
import { Input } from "@/components/ui/input";

export function ContactFormFields({ formData, handleChange }) {
  const fields = [
    { name: "firstname", label: "Prénom", type: "text", required: true },
    { name: "lastname", label: "Nom", type: "text", required: false },
    { name: "email", label: "Email professionnel", type: "email", required: true },
    { name: "phone", label: "Téléphone (optionnel)", type: "tel", required: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {fields.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.label}
          value={formData[field.name]}
          onChange={handleChange}
          required={field.required}
          className="bg-slate-800/50 border-slate-600 border text-foreground placeholder:text-muted-fg/50 focus:border-accent focus:ring-0 rounded-xl transition-all duration-300"
        />
      ))}
    </div>
  );
}