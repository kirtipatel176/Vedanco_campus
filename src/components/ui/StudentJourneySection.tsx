"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";

const JOURNEY_STEPS = [
  { step: "01", title: "Apply", desc: "Submit your profile and get selected for the elite batch.", span: "col-span-1 md:col-span-4" },
  { step: "02", title: "Get Mentorship", desc: "Connect with industry leaders and startup founders.", span: "col-span-1 md:col-span-8" },
  { step: "03", title: "Learn Practical Skills", desc: "Master AI, code, design, and business through hands-on work.", span: "col-span-1 md:col-span-7" },
  { step: "04", title: "Build Projects", desc: "Develop real-world applications and a standout portfolio.", span: "col-span-1 md:col-span-5" },
  { step: "05", title: "Career Opportunities", desc: "Secure internships, placements, or launch your startup.", span: "col-span-1 md:col-span-12" },
];

export default function StudentJourneySection() {
  return (
    <section className="w-full py-32 bg-background-soft relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-primary"
          >
            The Student <span className="text-brand-royal">Journey</span>
          </motion.h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            A structured path from ambitious student to industry-ready founder or operator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          {JOURNEY_STEPS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={item.span}
            >
              <BentoCard className="h-full min-h-[200px] flex flex-col justify-end p-8 relative overflow-hidden group">
                {/* Background oversized number */}
                <span className="absolute -right-4 -top-8 text-[120px] font-heading font-black text-brand-royal/5 group-hover:text-brand-royal/10 transition-colors duration-500 pointer-events-none select-none">
                  {item.step}
                </span>
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-brand-royal/10 text-brand-royal text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    Step {item.step}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
