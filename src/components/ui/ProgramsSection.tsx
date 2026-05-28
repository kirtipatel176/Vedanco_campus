"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PROGRAMS = [
  {
    id: "01",
    title: "Applied AI Integration",
    description: "A comprehensive curriculum covering applied artificial intelligence, machine learning frameworks, and automated workflows.",
    duration: "1 Month",
    color: "from-brand-royal to-brand-purple",
  },
  {
    id: "02",
    title: "Performance Marketing & Strategy",
    description: "Advanced strategies in performance marketing, search engine optimization, and brand positioning.",
    duration: "45 Days",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "03",
    title: "Venture & Entrepreneurship",
    description: "Rigorous fundamentals in venture creation, business strategy, and scalable entrepreneurship.",
    duration: "3 Months",
    color: "from-brand-sky to-brand-cyan",
  },
  {
    id: "04",
    title: "Software & Systems Engineering",
    description: "Intensive engineering program focused on scalable systems architecture, API development, and modern software practices.",
    duration: "6 Months",
    color: "from-emerald-400 to-teal-500",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full py-32 bg-background-primary relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
              <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-text-primary mb-6 uppercase"
            >
              OUR FLAGSHIP <br />
              <span className="text-gradient-primary">PROGRAMS</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pb-2"
          >
            <p className="text-text-secondary max-w-sm text-sm">
              Our curriculum is designed by industry experts to give you practical, real-world skills that matter today.
            </p>
          </motion.div>
        </div>

        {/* Programs List - Horizontal Split Layout */}
        <div className="flex flex-col gap-8">
          {PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 bg-white rounded-[2rem] border border-border-light hover:border-transparent hover:shadow-[0_20px_50px_rgb(0,0,0,0.03)] transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className={cn("absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l opacity-5", program.color)} />
              </div>

              {/* Left Content */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-center relative z-10 w-full max-w-5xl">
                <span className="font-heading text-2xl font-semibold text-text-secondary/40 group-hover:text-brand-royal transition-colors duration-300">
                  {program.id}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4 group-hover:text-brand-royal transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed md:max-w-xl mb-4">
                    {program.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-soft border border-border-light text-sm font-semibold text-text-primary">
                    <span>⏳ Duration:</span> <span className="text-brand-royal">{program.duration}</span>
                  </div>
                </div>
              </div>

              {/* Right Action */}
              <div className="mt-8 md:mt-0 relative z-10">
                <button className="w-14 h-14 rounded-full border border-border-light flex items-center justify-center bg-background-primary group-hover:bg-brand-royal group-hover:border-brand-royal group-hover:text-white transition-all duration-300 group-hover:shadow-[0_10px_20px_rgba(79,70,229,0.2)]">
                  <ArrowUpRight strokeWidth={1.5} className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
