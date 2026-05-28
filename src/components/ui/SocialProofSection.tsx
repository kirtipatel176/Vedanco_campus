"use client";

import { motion } from "framer-motion";
import { Users, Presentation, Briefcase, Award } from "lucide-react";

const REASONS = [
  "100% Practical Learning",
  "Industry-Focused Curriculum",
  "Placement Assistance",
  "Internship Opportunities",
  "Founder & Industry Mentorship",
  "Real-World Projects",
  "Networking Opportunities",
  "Career Guidance",
  "Community-Driven Growth",
];

export default function SocialProofSection() {
  return (
    <section className="w-full py-20 bg-background-primary relative overflow-hidden border-t border-b border-border-light/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4"
          >
            WHY STUDENTS <span className="text-gradient-primary">CHOOSE US</span>
          </motion.h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-border-light shadow-sm"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <span className="text-sm font-bold">✓</span>
              </div>
              <span className="text-text-secondary font-medium text-sm md:text-base">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
