"use client";

import React from "react";
import { Heart, Search, Menu } from "lucide-react";

export default function IconBar() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <a href="#about" aria-label="À propos" className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300">
        <Heart size={24} />
      </a>
      <a href="#projects" aria-label="Projets" className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300">
        <Search size={24} />
      </a>
      <a href="#contact" aria-label="Contact" className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300">
        <Menu size={24} />
      </a>
    </div>
  );
}
