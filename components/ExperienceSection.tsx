'use client';

import { Language } from '@/types';
import { EXPERIENCES } from '@/lib/data';
import Card3D from './Card3D';
import ScrollReveal from './ScrollReveal';

interface ExperienceSectionProps {
  language: Language;
}

export default function ExperienceSection({ language }: ExperienceSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className={`${isArabic ? 'text-3xl/[1.5] md:text-5xl/[1.35]' : 'text-4xl md:text-5xl'} font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-transparent font-orbitron`}>
            {isArabic ? 'سجل الخبرات' : 'EXPERIENCE LOG'}
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-red-600 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <ScrollReveal key={exp.id}>
                  <div className={`flex items-center ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Card3D>
                        <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] backdrop-blur-sm">
                          <div className="text-sm text-red-500 font-bold mb-2 font-rajdhani">
                            {exp[isArabic ? 'periodAr' : 'period']}
                          </div>
                          <h3 className={`${isArabic ? 'text-xl/[1.4] md:text-2xl/[1.35]' : 'text-2xl'} font-bold text-cyan-400 mb-2 font-orbitron`}>
                            {exp[isArabic ? 'titleAr' : 'title']}
                          </h3>
                          <div className="text-purple-400 mb-4 font-semibold font-rajdhani">
                            {exp[isArabic ? 'companyAr' : 'company']}
                          </div>
                          <p className="text-gray-300 mb-4">
                            {exp[isArabic ? 'descriptionAr' : 'description']}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                              <span 
                                key={tech}
                                className="px-2 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded text-xs text-cyan-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card3D>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(0,255,255,0.6)]" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
