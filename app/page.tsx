'use client';

import { useState, useEffect } from 'react';
import { Language } from '@/types';
import LoadingScreen from '@/components/LoadingScreen';
import BackgroundEffects from '@/components/BackgroundEffects';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);

    // Update HTML attributes only on client side
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('lang', newLang);
      document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    }
  };

  useEffect(() => {
    // Set initial HTML attributes on mount
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('lang', currentLang);
      document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    }
  }, [currentLang]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <BackgroundEffects />
      <Navigation currentLang={currentLang} onLanguageToggle={toggleLanguage} />
      <HeroSection language={currentLang} />
      <SkillsSection language={currentLang} />
      <ExperienceSection language={currentLang} />
      <ProjectsSection language={currentLang} />
      <ContactSection language={currentLang} />
    </main>
  );
}
