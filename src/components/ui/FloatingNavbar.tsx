"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#about" },
  { name: "Mentorship", href: "#mentorship" },
  { name: "Community", href: "#community" },
  { name: "Ambassador", href: "#ambassador" },
  { name: "Contact", href: "#contact" },
];

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300"
      style={{ top: 'var(--navbar-top, 56px)' }}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full transition-all duration-300",
          "bg-white/70 backdrop-blur-md border border-border-light shadow-sm",
          scrolled ? "bg-white/80 shadow-md py-2" : ""
        )}
      >
        {/* LOGO */}
        <Link href="/" className="flex flex-col group relative z-10">
          <span className="font-heading font-bold text-sm tracking-widest uppercase text-text-primary">
            Vedanco
          </span>
          <span className="text-[9px] font-medium tracking-[0.2em] text-brand-sky uppercase -mt-0.5">
            Global Campus
          </span>
        </Link>

        {/* LINKS */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-royal transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="relative z-10 flex items-center gap-4">
          <Link
            href="#apply"
            className="hidden sm:inline-flex group relative items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-primary rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] overflow-hidden"
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </Link>
          
          <button 
            className="lg:hidden p-2 text-text-primary hover:text-brand-royal transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 bg-white/95 backdrop-blur-md border border-border-light rounded-2xl shadow-xl lg:hidden flex flex-col gap-4 z-40"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-text-secondary hover:text-brand-royal transition-colors p-2 rounded-lg hover:bg-background-soft"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#apply"
              onClick={() => setIsOpen(false)}
              className="sm:hidden w-full group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-gradient-primary rounded-xl overflow-hidden mt-2"
            >
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
