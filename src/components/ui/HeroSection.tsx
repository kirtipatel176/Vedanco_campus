"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full pb-16 pt-20"> {/* pt-20 to clear fixed navbar */}

      {/* Banner Image */}
      <div className="relative w-full bg-background-soft border-b border-border-light">
        <Image
          src="/assets/hero1.png"
          alt="Vedanco Global Campus Banner"
          width={1774}
          height={887}
          className="w-full h-auto max-h-[55vh] object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-60" />
      </div>

      {/* Hero Content (Below the Banner) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-12 md:pt-16 flex flex-col items-center text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-brand-royal/5 border border-brand-royal/10 rounded-full mb-8"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-royal">
            ज्ञानं शक्तिः, नेतृत्वं भविष्यः।
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-[72px] leading-[1.05] font-heading font-bold text-text-primary mb-6 tracking-tighter"
        >
          The Launchpad for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal to-brand-cyan">Future Leaders.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-secondary mb-10 max-w-3xl leading-relaxed font-light"
        >
          Join a prestigious community of ambitious peers. Experience a rigorous, practical curriculum designed to forge tomorrow's <strong className="font-medium text-text-primary">founders, innovators, and industry leaders</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full sm:w-auto"
        >
          <Link
            href="#apply"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-3.5 text-sm font-semibold text-white transition-all duration-300 bg-brand-royal rounded-full hover:bg-brand-royal/90 hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5"
          >
            Apply for Admission
          </Link>

          <Link
            href="#programs"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-3.5 text-sm font-semibold text-text-primary transition-all duration-300 bg-white border border-border-light rounded-full hover:bg-background-soft hover:shadow-sm hover:-translate-y-0.5"
          >
            Explore Programs
          </Link>
        </motion.div>

        {/* Subtle bottom features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border-light w-full max-w-2xl text-sm font-medium text-text-secondary"
        >
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-royal"></span> Practical Learning</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span> Real-World Skills</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-royal"></span> Startup Ecosystem</span>
        </motion.div>

      </div>

    </section>
  );
}
