"use client";

import { motion } from "framer-motion";
import { Sparkles, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.setProperty('--announcement-height', '40px');
      document.documentElement.style.setProperty('--navbar-top', '56px');
    } else {
      document.documentElement.style.setProperty('--announcement-height', '0px');
      document.documentElement.style.setProperty('--navbar-top', '16px');
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-primary text-white text-xs md:text-sm font-medium overflow-hidden"
    >
      <div className="relative flex items-center justify-center px-4 py-2.5 max-w-7xl mx-auto pr-10 md:pr-4">
        {/* Animated Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-white/20 blur-md transform -skew-x-12 animate-[shimmer_3s_infinite]" />
        </div>

        <div className="flex items-center gap-6 relative z-10 overflow-hidden w-full md:w-auto">
          {/* Marquee effect on small screens, static on desktop */}
          <div className="flex items-center gap-6 whitespace-nowrap animate-[marquee_20s_linear_infinite] md:animate-none">
            <span className="flex items-center gap-2">
              <span className="text-base">🚀</span> Admissions Open for Future Leaders Batch 2026
            </span>
            <span className="hidden md:flex items-center gap-2 text-white/80">
              •
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap size={16} /> Limited Founding Student Access Available
            </span>
            <span className="hidden md:flex items-center gap-2 text-white/80">
              •
            </span>
            <Link href="#ambassador" className="flex items-center gap-1 hover:text-white/80 transition-colors group">
              <Sparkles size={16} /> Campus Ambassador Applications Open
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          aria-label="Close announcement"
        >
          &times;
        </button>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(400%) skewX(-12deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </motion.div>
  );
}
