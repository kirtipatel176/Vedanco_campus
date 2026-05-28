"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BentoCard } from "./BentoCard";

const MENTORS = [
  { role: "Startup Founders", tag: "Business & Strategy", color: "from-brand-royal to-brand-purple" },
  { role: "Top Developers", tag: "Tech & Engineering", color: "from-brand-sky to-brand-cyan" },
  { role: "Marketers", tag: "Growth & Branding", color: "from-amber-400 to-orange-500" },
  { role: "AI Experts", tag: "Innovation & LLMs", color: "from-emerald-400 to-teal-500" },
];

export default function MentorshipSection() {
  return (
    <section id="mentorship" className="w-full py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight"
            >
              Learn From Founders & <span className="text-gradient-primary">Industry Mentors.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary leading-relaxed mb-10"
            >
              Skip the traditional lectures. Our students receive direct guidance, feedback, and networking opportunities from people who are actually building the future.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MENTORS.map((mentor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="p-6 rounded-2xl bg-background-soft border border-border-light flex flex-col gap-2 group hover:bg-white hover:shadow-lg transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary group-hover:text-brand-royal transition-colors">{mentor.tag}</p>
                  <h4 className="text-lg font-heading font-bold text-text-primary">{mentor.role}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[500px]">
            {/* Realistic Bento Gallery for Mentors */}
            <div className="grid grid-cols-2 gap-4 h-full relative z-10">
               <BentoCard className="col-span-2 row-span-1 p-6 flex items-center justify-between !bg-white/40">
                 <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-full bg-gradient-primary p-0.5">
                     <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-xl text-brand-royal border-2 border-white">JD</div>
                   </div>
                   <div>
                     <h5 className="font-heading font-bold text-text-primary text-lg">John Doe</h5>
                     <p className="text-sm text-text-secondary">Ex-YCombinator Founder</p>
                   </div>
                 </div>
                 <div className="hidden sm:flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-xs font-semibold text-emerald-600">Available</span>
                 </div>
               </BentoCard>

               <BentoCard className="col-span-1 row-span-2 p-6 flex flex-col justify-between !bg-white/40">
                 <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4 font-bold">AS</div>
                 <div>
                   <h5 className="font-heading font-bold text-text-primary">Alice Smith</h5>
                   <p className="text-xs text-text-secondary mb-4">Sr. AI Engineer @ OpenAI</p>
                   <button className="w-full py-2 bg-background-soft rounded-lg text-xs font-semibold hover:bg-brand-royal hover:text-white transition-colors border border-border-light">
                     Book Session
                   </button>
                 </div>
               </BentoCard>

               <BentoCard className="col-span-1 row-span-1 p-6 flex flex-col justify-center items-center text-center !bg-brand-royal text-white !border-transparent">
                  <span className="text-3xl font-heading font-black mb-1">50+</span>
                  <p className="text-xs text-white/80 font-medium">Industry Experts</p>
               </BentoCard>

               <BentoCard className="col-span-1 row-span-1 p-6 flex items-center gap-3 !bg-white/40">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-200" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-200" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-cyan-200" />
                  </div>
                  <p className="text-xs font-medium text-text-secondary leading-tight">Weekly<br/>Office Hours</p>
               </BentoCard>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-royal/10 blur-[100px] rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
