"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight, Brain, Zap, Target, Globe } from "lucide-react";

import { BentoCard } from "./BentoCard";

const COMPARISON = [
  { traditional: "placements", vedanco: "Guaranteed Placement Assistance" },
  { traditional: "practical skills", vedanco: "100% Practical Learning" },
  { traditional: "internships", vedanco: "Real Internship Opportunities" },
  { traditional: "communication", vedanco: "Leadership & Communication" },
  { traditional: "career direction", vedanco: "Founder & Industry Mentorship" },
  { traditional: "industry exposure", vedanco: "Real-World Projects & Networking" },
];

const FEATURES = [
  { title: "Advanced Curriculum", icon: Brain },
  { title: "Industry Mentorship", icon: Target },
  { title: "Applied Learning", icon: Zap },
  { title: "Innovation Hub", icon: Globe },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6 md:mb-8"
          >
            Why <span className="text-brand-royal">VEDANCO</span> GLOBAL CAMPUS?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-xl text-text-secondary leading-relaxed space-y-4"
          >
            <p>The modern professional landscape demands more than theoretical knowledge. Students often graduate with degrees but struggle to secure:</p>
            <p className="text-brand-royal font-medium tracking-wide text-sm md:text-base">placements • practical skills • internships • communication • career direction • industry exposure</p>
            <p>At Vedanco Global Campus, we bridge the gap between academic theory and industry reality.</p>
            <p>We are building a prestigious, practical-first ecosystem where ambitious students learn by building, networking, and executing real-world projects.</p>
          </motion.div>
        </div>

        {/* Split Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-32">
          {/* Traditional */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background-soft rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 border border-border-light shadow-[inset_0_0_15px_rgba(0,0,0,0.02)]"
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary mb-6 md:mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                <X size={20} strokeWidth={2.5} />
              </span>
              Traditional Education
            </h3>
            <ul className="space-y-6">
              {COMPARISON.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-text-secondary">
                  <X size={18} className="text-red-400 shrink-0" />
                  <span className="text-lg">{item.traditional}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vedanco */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-primary rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 text-white shadow-[0_20px_50px_rgba(79,70,229,0.2),inset_0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-6 md:mb-8 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 rounded-full bg-white text-brand-royal flex items-center justify-center">
                <Check size={20} strokeWidth={2.5} />
              </span>
              Vedanco Education
            </h3>
            <ul className="space-y-6 relative z-10">
              {COMPARISON.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white/90">
                  <Check size={18} className="text-white shrink-0" />
                  <span className="text-lg font-medium">{item.vedanco}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature Ecosystem */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-heading font-bold text-text-primary"
          >
            More Than Education. <br className="hidden md:block" />
            <span className="text-text-secondary">A Future Ecosystem.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <BentoCard className="p-8 h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300 z-10">
                    <ArrowRight className="text-brand-royal" size={20} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-background-soft flex items-center justify-center text-brand-royal mb-6 group-hover:bg-brand-royal group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm border border-border-light group-hover:border-transparent">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-text-primary relative z-10">
                    {feature.title}
                  </h4>
                </BentoCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
