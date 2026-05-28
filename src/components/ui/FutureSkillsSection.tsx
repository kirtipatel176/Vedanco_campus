"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "AI Tools & Agents",
  "Prompt Engineering",
  "Automation",
  "Startup Thinking",
  "Communication",
  "Leadership",
  "Branding",
  "Modern Technology",
];

export default function FutureSkillsSection() {
  return (
    <section className="w-full py-32 bg-background-primary relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-cyan/10 blur-[100px] rounded-full mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-royal/10 blur-[100px] rounded-full mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6"
          >
            Future Skills for the <span className="text-gradient-secondary">Next Generation</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-8 py-4 bg-white/60 backdrop-blur-md border border-border-light rounded-full text-lg font-medium text-text-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-brand-cyan transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
