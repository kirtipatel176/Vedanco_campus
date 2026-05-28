import Link from "next/link";

const SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-border-light pt-20 pb-10 px-6 mt-32 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-widest text-text-primary uppercase leading-tight">
                VEDANCO GLOBAL<br/>CAMPUS
              </span>
              <span className="text-sm font-semibold tracking-wide text-brand-royal uppercase mt-1">
                Building Future Leaders
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-sm mt-4 leading-relaxed">
              A next-generation practical learning ecosystem helping students build AI skills, leadership, startup mindset, and future-ready careers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-text-primary mb-2">Programs</h4>
            <Link href="#" className="text-sm text-text-secondary hover:text-brand-royal transition-colors">AI Career Accelerator</Link>
            <Link href="#" className="text-sm text-text-secondary hover:text-brand-royal transition-colors">Digital Marketing</Link>
            <Link href="#" className="text-sm text-text-secondary hover:text-brand-royal transition-colors">Startup Ecosystem</Link>
            <Link href="#" className="text-sm text-text-secondary hover:text-brand-royal transition-colors">Software Engineering</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-text-primary mb-2">Campus</h4>
            <Link href="#" className="text-sm text-text-secondary hover:text-brand-royal transition-colors">About Us</Link>
            <Link href="#" className="text-sm text-text-secondary hover:text-brand-royal transition-colors">Mentors</Link>
            <Link href="#" className="text-sm text-text-secondary hover:text-brand-royal transition-colors">Community</Link>
            <Link href="#" className="text-sm text-text-secondary hover:text-brand-royal transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-light gap-6">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Vedanco Global Campus. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-background-soft border border-border-light text-text-secondary hover:text-brand-royal hover:bg-white transition-all shadow-sm hover:shadow-md"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
