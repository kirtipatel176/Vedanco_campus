import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import AnnouncementBar from '@/components/ui/AnnouncementBar';
import FloatingNavbar from '@/components/ui/FloatingNavbar';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'VEDANCO GLOBAL CAMPUS | The Future of Education Starts Here',
  description: 'VEDANCO GLOBAL CAMPUS is a next-generation practical learning ecosystem helping students build AI skills, leadership, startup mindset, industry exposure, and future-ready careers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
      </head>
      <body 
        className={`${inter.variable} font-body text-text-primary bg-background-primary antialiased selection:bg-brand-royal/20 selection:text-brand-royal overflow-x-hidden min-h-screen flex flex-col transition-all duration-300`}
        style={{ paddingTop: 'var(--announcement-height, 40px)' }}
      >
        <SmoothScroll>
          <AnnouncementBar />
          <FloatingNavbar />
          <main className="flex-1 flex flex-col w-full relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
