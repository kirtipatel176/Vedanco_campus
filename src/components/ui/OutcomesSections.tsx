"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import Link from "next/link";

import { BentoCard } from "./BentoCard";

export function ProjectsSection() {
  const PROJECTS = [
    { title: "AI Agent Platform", category: "AI Software Engineering", span: "col-span-1 md:col-span-8", color: "from-brand-sky/20 to-brand-cyan/20" },
    { title: "D2C E-commerce Brand", category: "Startup Accelerator", span: "col-span-1 md:col-span-4", color: "from-brand-purple/20 to-pink-500/20" },
    { title: "Automated Marketing Funnel", category: "Digital Marketing", span: "col-span-1 md:col-span-5", color: "from-amber-400/20 to-orange-500/20" },
    { title: "LLM PDF Chatbot", category: "AI Career Accelerator", span: "col-span-1 md:col-span-7", color: "from-emerald-400/20 to-teal-500/20" },
  ];

  return (
    <section className="w-full py-16 md:py-32 bg-background-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4"
            >
              Build Real <span className="text-brand-royal">Projects.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary"
            >
              Theory gets you grades. Projects get you hired.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={project.span}
            >
              <BentoCard className="h-full min-h-[300px] flex flex-col justify-end p-0 overflow-hidden cursor-pointer group">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-500">
                      <p className="font-heading font-bold text-text-primary/70 uppercase text-[10px] tracking-widest">View</p>
                   </div>
                </div>
                <div className="relative z-10 p-8 bg-gradient-to-t from-white via-white/80 to-transparent mt-auto">
                  <p className="text-brand-cyan text-sm font-semibold mb-1">{project.category}</p>
                  <h3 className="text-text-primary text-2xl font-heading font-bold">{project.title}</h3>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlacementSupportSection() {
  const BENEFITS = [
    "Resume Building", "LinkedIn Optimization", "Mock Interviews", 
    "Internship Access", "Networking Events", "Portfolio Guidance"
  ];

  return (
    <section className="w-full py-16 md:py-32 bg-white border-t border-b border-border-light/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan mb-8"
          >
            <Briefcase size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6"
          >
            Career & <span className="text-gradient-secondary">Placement</span> Support.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed mb-8"
          >
            We don't just teach you; we help you launch your career. Get end-to-end support to land top internships and jobs in leading tech companies and startups.
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.05) }}
                className="flex items-center gap-2 text-text-secondary font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                {benefit}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[500px] bg-background-soft rounded-[1.5rem] md:rounded-[2.5rem] border border-border-light overflow-hidden flex items-center justify-center mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/10 to-transparent" />
          <div className="p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xl max-w-[280px] relative z-10">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-light">
               <div className="w-12 h-12 rounded-full bg-brand-royal/20" />
               <div>
                 <div className="h-4 w-24 bg-text-primary/20 rounded mb-2" />
                 <div className="h-3 w-16 bg-brand-cyan/40 rounded" />
               </div>
            </div>
            <div className="space-y-3">
               <div className="h-2 w-full bg-text-secondary/10 rounded" />
               <div className="h-2 w-[80%] bg-text-secondary/10 rounded" />
               <div className="h-2 w-[90%] bg-text-secondary/10 rounded" />
            </div>
            <div className="mt-6 flex items-center justify-center h-10 w-full bg-brand-royal/10 text-brand-royal text-sm font-semibold rounded-lg">
               Offer Accepted
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AmbassadorSection() {
  return (
    <section id="ambassador" className="w-full py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-purple/10 text-brand-purple mb-8"
        >
          <Sparkles size={36} />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4 md:mb-6"
        >
          Become a Founding <br />Campus Ambassador
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-bold text-brand-royal mb-4"
        >
          Lead. Earn. Grow.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg text-text-secondary font-medium tracking-wide mb-12 uppercase"
        >
          Join the VEDANCO FUTURE LEADERS CAMPUS AMBASSADOR PROGRAM.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto bg-background-soft rounded-[2rem] p-8 border border-border-light mb-12 text-left"
        >
          <h4 className="font-heading font-bold text-xl mb-6 text-text-primary">Benefits:</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-text-secondary"><span className="text-xl">💸</span> Earn per admission</li>
            <li className="flex items-center gap-3 text-text-secondary"><span className="text-xl">🏆</span> Rewards & Recognition</li>
            <li className="flex items-center gap-3 text-text-secondary"><span className="text-xl">📜</span> Leadership Certificate</li>
            <li className="flex items-center gap-3 text-text-secondary"><span className="text-xl">🤝</span> Founder Mentorship</li>
            <li className="flex items-center gap-3 text-text-secondary"><span className="text-xl">🚀</span> Networking Opportunities</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#apply-ambassador"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-brand-primary bg-text-primary rounded-full hover:bg-brand-royal hover:shadow-lg"
          >
            Apply as Ambassador <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
