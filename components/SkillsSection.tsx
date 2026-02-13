'use client';

import { Language } from '@/types';
import { SKILLS } from '@/lib/data';
import Card3D from './Card3D';
import ScrollReveal from './ScrollReveal';

interface SkillsSectionProps {
  language: Language;
}

export default function SkillsSection({ language }: SkillsSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className={`${isArabic ? 'text-3xl/[1.5] md:text-5xl/[1.35]' : 'text-4xl md:text-5xl'} font-bold text-center mb-16 gradient-text font-orbitron`}>
            {isArabic ? 'الترسانة التقنية' : 'TECHNICAL ARSENAL'}
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <ScrollReveal key={skill.id} delay={index + 1}>
              <Card3D>
                <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors backdrop-blur-sm">
                  <h3 className={`${isArabic ? 'text-lg/[1.5] md:text-2xl/[1.35]' : 'text-xl md:text-2xl'} font-bold text-cyan-400 mb-4 font-rajdhani text-center md:text-left`}>
                    {skill[isArabic ? 'titleAr' : 'title']}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {skill.skills.map((item) => (
                      <span 
                        key={item}
                        className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
