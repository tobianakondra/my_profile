"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload, FiMail } from "react-icons/fi";
import { useCVDownload } from "@/hooks/useCVDownload";

export function HeroCTA() {
  const { downloadCV, isDownloading } = useCVDownload();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-12"
    >
      <Button
        size="lg"
        disabled={isDownloading}
        className="w-full sm:w-auto gap-2 bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg shadow-accent/25"
        onClick={downloadCV}
      >
        <FiDownload className="w-5 h-5" />
        {isDownloading ? "Téléchargement..." : "Télécharger mon CV"}
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="w-full sm:w-auto gap-2 border-border hover:bg-primary/50"
        asChild
      >
        <a href="#contact">
          Me contacter
          <FiMail className="w-5 h-5" />
        </a>
      </Button>
    </motion.div>
  );
}