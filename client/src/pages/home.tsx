import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: sectionId === "hero" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = "auto";
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <Services onNavigate={scrollToSection} />
        <BeforeAfter />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
