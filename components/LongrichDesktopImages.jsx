"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function LongrichDesktopImages({ project }) {
  return (
    <div className="space-y-4">
      {/* Home / Catalogue */}
      <div className="relative aspect-[4/3] rounded-xl bg-white/10 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} - Page d'accueil / Catalogue`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {/* Panier / Checkout */}
      <div className="relative aspect-[4/3] rounded-xl bg-white/10 overflow-hidden">
        <Image
          src={project.imageCart}
          alt={`${project.title} - Panier / Checkout`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}