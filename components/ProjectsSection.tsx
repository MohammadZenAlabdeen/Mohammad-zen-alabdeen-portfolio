'use client';

import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Language } from '@/types';
import { PROJECTS } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

interface ProjectsSectionProps {
  language: Language;
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const [currentProject, setCurrentProject] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneInnerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Ref for the timer
  const isArabic = language === 'ar';

  // Function to start the auto-slide timer
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handleManualProjectChange = (index: number) => {
    setCurrentProject(index);
    startTimer(); // Reset the timer when user clicks a dot
  };

  const handlePhoneClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current || !phoneInnerRef.current) return;

    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Logic to bend inward (away from user) on click
    const rotateX = (centerY - y) / 8;
    const rotateY = (x - centerX) / 8;

    phoneInnerRef.current.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.95, 0.95, 0.95)`;

    // Automatically snap back after a short delay
    setTimeout(() => {
      if (phoneInnerRef.current) {
        phoneInnerRef.current.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }
    }, 300);
  };

  const project = PROJECTS[currentProject];
  const techLabel = isArabic ? 'التقنيات المستخدمة' : 'TECH STACK';
  const projectLabel = isArabic ? 'مشروع' : 'PROJECT';

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className={`${isArabic ? 'text-3xl/[1.5] md:text-5xl/[1.35]' : 'text-4xl md:text-5xl'} font-bold text-center mb-16 bg-gradient-to-r from-red-600 to-cyan-400 bg-clip-text text-transparent font-orbitron`}>
            {isArabic ? 'عرض المشاريع' : 'PROJECT SHOWCASE'}
          </h2>
        </ScrollReveal>

        <div className="flex justify-center">
          <ScrollReveal delay={1}>
            <div 
              ref={phoneRef} 
              className="phone-3d relative cursor-pointer" 
              onClick={handlePhoneClick}
            >
              {/* Phone Mockup */}
              <div 
                ref={phoneInnerRef}
                className="phone-3d-inner w-80 h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border-4 border-gray-800 glow-purple p-3 relative transition-all duration-300 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="w-full h-full phone-screen p-6 flex flex-col">
                  <div className="text-xs text-cyan-400 mb-2 font-bold font-rajdhani">
                    {projectLabel} {currentProject + 1}/{PROJECTS.length}
                  </div>
                  
                  <div className="flex-1">
                    <div className="project-slide" key={currentProject}>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-orbitron">
                        {project[isArabic ? 'nameAr' : 'name']}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project[isArabic ? 'descriptionAr' : 'description']}
                      </p>
                      <div className="p-4 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 rounded-lg border border-purple-500/30">
                        <div className="text-xs text-purple-400 mb-2 font-semibold font-rajdhani">
                          {techLabel}
                        </div>
                        <div className="text-sm text-gray-300">
                          {project.tech}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex gap-2 justify-center mt-4">
                    {PROJECTS.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent phone from bending when clicking dots
                          handleManualProjectChange(i);
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          i === currentProject 
                            ? 'w-8 bg-gradient-to-r from-cyan-400 to-purple-500' 
                            : 'w-1.5 bg-gray-600'
                        }`}
                        aria-label={`Go to project ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-purple-600/20 to-cyan-500/20 blur-3xl -z-10 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}