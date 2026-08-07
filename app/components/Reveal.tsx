"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}

/**
 * Enveloppe ses enfants d'une apparition douce au scroll (fade + slide up).
 * Réutilisable partout : hero, titres, cartes de projets...
 * Respecte prefers-reduced-motion (fade simple, sans déplacement).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const initialY = shouldReduceMotion ? 0 : y;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}