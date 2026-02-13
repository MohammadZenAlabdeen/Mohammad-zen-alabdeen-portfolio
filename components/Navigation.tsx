'use client';

import { useState } from 'react';
import { Language } from '@/types';

interface NavigationProps {
  currentLang: Language;
  onLanguageToggle: () => void;
}

const NAV_ITEMS = [
  { en: 'About', ar: 'عني', href: '#about' },
  { en: 'Experience', ar: 'الخبرات', href: '#experience' },
  { en: 'Projects', ar: 'المشاريع', href: '#projects' },
  { en: 'Contact', ar: 'تواصل', href: '#contact' }
] as const;

export default function Navigation({ currentLang, onLanguageToggle }: NavigationProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  const handleNavClick = () => {
    setIsSidebarOpen(false);
  };

  const langText = currentLang === 'en' ? 'العربية' : 'English';

  return (
    <>
      {/* Sidebar Overlay */}
      <div 
        className={`sidebar-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <div 
        className={`mobile-sidebar fixed top-0 ${currentLang === 'ar' ? 'right-0' : 'left-0'} h-full w-72 bg-[#0a0a0f]/95 backdrop-blur-md border-${currentLang === 'ar' ? 'l' : 'r'} border-cyan-500/20 z-50 md:hidden transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : currentLang === 'ar' ? 'translate-x-full' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={toggleSidebar}
            className={`absolute top-6 ${currentLang === 'ar' ? 'left-6' : 'right-6'} text-cyan-400 hover:text-cyan-300 transition-colors`}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-2xl font-bold gradient-text font-orbitron mb-8">MZ.dev</div>
          
          <nav className="flex flex-col gap-6 font-rajdhani">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-xl font-semibold tracking-wider hover:text-cyan-400 transition-colors"
              >
                {item[currentLang]}
              </a>
            ))}
          </nav>
          
          {/* Language Toggle in Sidebar */}
          <div className="mt-8 pt-8 border-t border-cyan-500/20">
            <button 
              onClick={onLanguageToggle}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>{langText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleSidebar}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="text-2xl font-bold gradient-text font-orbitron">MZ.dev</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-rajdhani items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-semibold tracking-wider hover:text-cyan-400 transition-colors"
              >
                {item[currentLang]}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={onLanguageToggle}
              className="ml-4 px-4 py-2 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
              aria-label="Toggle language"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>{langText}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
