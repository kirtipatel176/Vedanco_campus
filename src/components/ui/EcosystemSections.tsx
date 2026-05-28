"use client";

import { motion } from "framer-motion";
import { MessageSquare, Orbit, Rocket, Share2 } from "lucide-react";

import { BentoCard } from "./BentoCard";

export function CommunitySection() {
  return (
    <section id="community" className="w-full py-16 md:py-32 bg-background-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4 md:mb-6"
        >
          Join a Powerful Student <span className="text-gradient-primary">Community.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-12 md:mb-16 px-4 md:px-0"
        >
          Surround yourself with ambitious peers. Build networks, collaborate on projects, and grow your leadership skills in an environment that rewards innovation.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Networking", icon: Share2 },
            { title: "Collaboration", icon: MessageSquare },
            { title: "Accountability", icon: Orbit },
            { title: "Innovation", icon: Rocket },
          ].map((item, idx) => {
             const Icon = item.icon;
             return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <BentoCard className="p-8 h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-background-soft border border-border-light flex items-center justify-center text-brand-royal shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-heading font-semibold text-text-primary">{item.title}</h4>
                </BentoCard>
              </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  );
}

export function StartupEcosystemSection() {
  return (
    <section className="w-full py-16 md:py-32 bg-gradient-primary relative overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-white/10 blur-[120px] rounded-full mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-heading font-bold mb-4 md:mb-6 leading-tight"
          >
            Built for Future Founders & Innovators.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-white/80 leading-relaxed mb-6 md:mb-8"
          >
            Vedanco promotes startup thinking, execution, business understanding, and creativity. We don't just train employees; we build creators.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {['Startup Thinking', 'Execution focus', 'Business Strategy', 'Pitching'].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] flex items-center justify-center mt-12 md:mt-0">
          <div className="w-full max-w-[400px] aspect-square rounded-full border border-white/20 relative flex items-center justify-center">
             <div className="w-[80%] aspect-square rounded-full border border-white/30 flex items-center justify-center relative">
               <div className="w-[60%] aspect-square rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                  <Rocket size={48} className="text-white drop-shadow-lg" />
               </div>
               
               {/* Orbital elements */}
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-[-10%] border border-transparent rounded-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-cyan rounded-full shadow-[0_0_15px_#06B6D4]" />
               </motion.div>
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-[-30%] border border-transparent rounded-full">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-brand-purple rounded-full shadow-[0_0_20px_#7C3AED]" />
               </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
