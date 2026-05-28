"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full pb-16">

      {/* Banner Image */}
      <div className="relative w-full bg-background-soft border-b border-border-light">
        <Image
          src="/assets/hero1.png"
          alt="Vedanco Global Campus Banner"
          width={1774}
          height={887}
          className="w-full h-[40vh] md:h-auto md:max-h-[55vh] object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-60" />
      </div>

    </section>
  );
}
