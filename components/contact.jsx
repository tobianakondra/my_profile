"use client";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-surface border-t border-border">
      <div className="max-w-7xl px-4 sm:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-accent font-medium tracking-wide text-sm mb-3 block">Contact</span>
          <h2 className="h1 text-foreground mb-4">Travaillons ensemble</h2>
          <p className="text-lg text-muted-fg max-w-2xl">
            Disponible en <span className="text-accent font-medium">Freelance</span> ou <span className="text-accent font-medium">CDI</span> —
            Développeur Fullstack basé en France. Décrivez votre projet, je vous répondrai sous 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;