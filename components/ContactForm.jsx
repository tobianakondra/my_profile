"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { ContactFormFields } from "./ContactFormFields";
import { ContactServiceSelect } from "./ContactServiceSelect";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const { submitForm, status, errorMsg } = useContactForm();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitForm(formData);
    if (result.success) {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <ContactFormFields formData={formData} handleChange={handleChange} />
      <ContactServiceSelect value={formData.service} onValueChange={(v) => setFormData((p) => ({ ...p, service: v }))} />

      <Textarea
        name="message"
        placeholder="Décrivez votre projet, vos besoins, vos délais..."
        value={formData.message}
        onChange={handleChange}
        required
        className="h-[140px] bg-slate-800/50 border-border text-foreground placeholder:text-muted-fg/50 focus:border-accent focus:ring-0 rounded-xl resize-none transition-all duration-300 mb-4"
      />

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-sm mb-4"
          >
            <FaCheckCircle className="text-green-400 shrink-0" />
            Message envoyé ! Je vous répondrai dans les plus brefs délais.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm mb-4"
          >
            <FaExclamationCircle className="text-red-400 shrink-0" />
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto sm:min-w-[180px] bg-accent hover:bg-accent-hover text-accent-foreground font-semibold py-3 px-8 rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2 justify-center">
            <motion.span
              className="inline-block w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
            />
            Envoi en cours...
          </span>
        ) : (
          "Envoyer le message →"
        )}
      </Button>
    </form>
  );
}