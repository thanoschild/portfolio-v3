'use client'

import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ProfileSection from "@/components/sections/ProfileSection";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'profiles'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-theme-bg text-theme-sub">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header activeSection={activeSection} onSectionClick={scrollToSection} />
          
          <main className="pt-24 lg:w-[52%] lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ProfileSection/>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
