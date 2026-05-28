import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import ProgramsSection from "@/components/ui/ProgramsSection";
import LearningExperienceSection from "@/components/ui/LearningExperienceSection";
import { TestimonialsSection, FaqSection, FinalCtaSection } from "@/components/ui/ClosingSections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <LearningExperienceSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
