"use client";

import { motion } from "framer-motion";
import { Hammer, Users2, Lightbulb, TrendingUp, Terminal, FileCode2, Play } from "lucide-react";
import { BentoCard } from "./BentoCard";

const EXPERIENCES = [
  { icon: Hammer, title: "Applied Projects", desc: "Apply theoretical knowledge to real scenarios." },
  { icon: Users2, title: "Peer Collaboration", desc: "Work alongside a cohort of driven peers." },
  { icon: Lightbulb, title: "Strategic Problem Solving", desc: "Tackle complex industry challenges." },
  { icon: TrendingUp, title: "Professional Portfolio", desc: "Develop a comprehensive body of work." },
];

export default function LearningExperienceSection() {
  return (
    <section className="w-full py-16 md:py-32 bg-background-primary relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4 md:mb-6 leading-tight"
            >
              A New Way of <span className="text-gradient-secondary">Learning.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 md:mb-10 max-w-lg"
            >
              Education should be an active pursuit, not a passive experience. Our curriculum is designed around execution—you will build, collaborate, and solve complex problems alongside a cohort of driven peers.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {EXPERIENCES.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:border-brand-cyan/50 transition-colors">
                      <Icon size={18} className="text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary">{exp.title}</h4>
                      <p className="text-sm text-text-secondary mt-1">{exp.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Visual: Realistic Code Editor Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <BentoCard className="w-full p-0 !p-0 border-border-light shadow-2xl bg-[#0d1117] overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-[#8b949e] text-xs font-mono">
                  <FileCode2 size={14} /> main.py
                </div>
                <div className="flex items-center gap-2 text-[#8b949e]">
                  <Play size={14} className="hover:text-emerald-400 cursor-pointer" />
                </div>
              </div>
              
              {/* Editor Body */}
              <div className="flex">
                {/* Line numbers */}
                <div className="flex flex-col py-4 px-4 text-right text-[#484f58] font-mono text-sm border-r border-[#30363d] bg-[#0d1117] select-none">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                </div>
                {/* Code Content */}
                <div className="w-full p-4 font-mono text-sm leading-relaxed overflow-x-auto text-[#c9d1d9] bg-[#0d1117]">
                  <pre>
                    <code>
<span className="text-[#ff7b72]">import</span> openai<br/>
<span className="text-[#ff7b72]">from</span> dotenv <span className="text-[#ff7b72]">import</span> load_dotenv<br/>
<br/>
<span className="text-[#8b949e]"># Initialize AI Agent</span><br/>
load_dotenv()<br/>
<br/>
<span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">generate_startup_idea</span>(industry):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;response = openai.ChatCompletion.create(<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model=<span className="text-[#a5d6ff]">"gpt-4"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;messages=[&#123;<span className="text-[#a5d6ff]">"role"</span>: <span className="text-[#a5d6ff]">"system"</span>, <span className="text-[#a5d6ff]">"content"</span>: <span className="text-[#a5d6ff]">f"Generate idea for &#123;industry&#125;"</span>&#125;]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> response.choices[0].message.content
                    </code>
                  </pre>
                </div>
              </div>

              {/* Terminal */}
              <div className="border-t border-[#30363d] bg-[#161b22] px-4 py-2">
                <div className="flex items-center gap-2 text-[#8b949e] text-xs font-mono mb-2">
                  <Terminal size={12} /> Terminal
                </div>
                <div className="font-mono text-xs text-[#3fb950]">
                  $ python main.py<br/>
                  <span className="text-[#c9d1d9]">Running agent deployment... success!</span>
                </div>
              </div>
            </BentoCard>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-2 md:-bottom-6 md:-left-6 p-3 md:p-4 bg-white backdrop-blur-xl border border-border-light rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 z-20 scale-90 md:scale-100 origin-bottom-left"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700">RS</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">PM</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-cyan-100 flex items-center justify-center text-xs font-bold text-cyan-700">AK</div>
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">Live Share</p>
                <p className="text-xs text-text-secondary">3 peers coding</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
