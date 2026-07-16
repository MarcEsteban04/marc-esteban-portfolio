import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationSection } from "@/components/EducationSection";
import { StrengthsSection } from "@/components/StrengthsSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsGrid />
        <ProjectGrid />
        <ExperienceTimeline />
        <EducationSection />
        <StrengthsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
