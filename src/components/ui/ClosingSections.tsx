"use client";

import { motion } from "framer-motion";
import { Plus, Minus, MapPin, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function TestimonialsSection() {
  const TESTIMONIALS = [
    { name: "Rahul S.", role: "Student", text: "Vedanco helped me understand practical career skills beyond traditional education." },
    { name: "Priya M.", role: "Student", text: "Finally, a platform focused on real-world growth and industry learning." },
  ];

  return (
    <section className="w-full py-32 bg-background-soft relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4"
          >
            Real Growth. <span className="text-gradient-primary">Real Transformation.</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-border-light shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-royal/20 to-brand-cyan/20 border border-border-light" />
                <div>
                  <h4 className="font-heading font-bold text-text-primary">{t.name}</h4>
                  <p className="text-xs font-semibold text-brand-royal uppercase">{t.role}</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed text-sm">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderMessageSection() {
  return (
    <section className="w-full py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-royal font-bold tracking-widest uppercase mb-4"
        >
          Our Mission
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-8"
        >
          We Are Building More <br />Than an Institute.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed space-y-6 max-w-3xl mx-auto"
        >
          <p>
            VEDANCO GLOBAL CAMPUS is a movement to redefine education through practical learning, innovation, leadership, and career transformation.
          </p>
          <p>
            Our mission is to help students become confident, skilled, and future-ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const FAQS = [
    { q: "Is it online?", a: "Yes, our programs are accessible globally through our premium digital ecosystem." },
    { q: "Are certificates included?", a: "Yes, you receive industry-recognized certification upon successful completion of the programs." },
    { q: "Is placement support available?", a: "Absolutely. We provide end-to-end placement and internship support, including resume building and mock interviews." },
    { q: "Who can apply?", a: "Any ambitious student looking to build practical skills, regardless of their current degree or background." },
    { q: "Is it beginner friendly?", a: "Yes, our programs start from the fundamentals and scale up to advanced, production-ready concepts." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-32 bg-background-primary relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-heading font-bold text-text-primary"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-border-light rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-heading font-semibold text-text-primary text-lg">{faq.q}</span>
                <span className="text-brand-royal shrink-0 ml-4">
                  {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-text-secondary">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="contact" className="w-full pt-32 pb-10 bg-white relative overflow-hidden flex flex-col">
      <div className="max-w-5xl mx-auto px-6 w-full flex-1 flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Main CTA */}
        <div className="w-full bg-gradient-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden mb-20 shadow-[0_20px_60px_rgba(79,70,229,0.2)]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-8 relative z-10"
          >
            Ready to Build Your Future?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-6 relative z-10"
          >
            <p className="text-lg text-white/90 max-w-xl mx-auto">
              Join a community of ambitious students, creators, founders, and future leaders.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/20 mb-2">
              <span className="text-white text-sm font-bold">🚀 Admissions Opening Soon</span>
            </div>
            <Link href="#apply" className="px-10 py-4 bg-white text-brand-royal font-bold rounded-full hover:scale-105 transition-transform w-full sm:w-auto shadow-xl">
              Apply Now
            </Link>
          </motion.div>
        </div>

        {/* Newsletter & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full text-left">
          
          {/* Newsletter */}
          <div className="p-8 bg-background-soft rounded-3xl border border-border-light">
            <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">Stay Updated</h3>
            <p className="text-text-secondary text-sm mb-6">Join our newsletter to get the latest insights on AI, startups, and career growth.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-brand-royal transition-colors text-text-primary text-sm"
              />
              <button className="px-6 py-3 bg-text-primary text-white font-medium rounded-xl hover:bg-brand-royal transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="p-8 bg-background-soft rounded-3xl border border-border-light">
            <h3 className="font-heading font-bold text-2xl text-text-primary mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <MapPin size={18} className="text-brand-royal" />
                </div>
                <span className="font-medium text-sm">Gujarat, India</span>
              </div>
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Mail size={18} className="text-brand-royal" />
                </div>
                <span className="font-medium text-sm">info@vedanco.com</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
