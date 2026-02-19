'use client';

import { Language } from '@/types';
import { CONTACT_INFO } from '@/lib/data';
import Card3D from './Card3D';
import ScrollReveal from './ScrollReveal';

interface ContactSectionProps {
  language: Language;
}

export default function ContactSection({ language }: ContactSectionProps) {
  const isArabic = language === 'ar';

  return (
    <footer id="contact" className="relative py-20 border-t border-cyan-400/20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className={`${isArabic ? 'text-3xl/[1.5] md:text-5xl/[1.35]' : 'text-4xl md:text-5xl'} font-bold mb-4 gradient-text font-orbitron`}>
              {isArabic ? 'ابدأ التواصل' : 'INITIALIZE CONTACT'}
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              {isArabic 
                ? 'لنبني شيئًا استثنائيًا معًا'
                : "Let's build something extraordinary together"
              }
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {CONTACT_INFO.map((contact, index) => (
            <ScrollReveal key={contact.id} delay={index + 1}>
              <Card3D>
                <a
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-6 rounded-lg bg-gradient-to-br from-cyan-500/5 to-purple-600/5 border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] backdrop-blur-sm text-center group"
                >
                  <div className="text-4xl mb-3">{contact.icon}</div>
                  <div className="text-sm text-purple-400 mb-2 font-semibold font-rajdhani">
                    {contact[isArabic ? 'labelAr' : 'label']}
                  </div>
                  <div className="text-cyan-300 group-hover:text-cyan-400 transition-colors text-sm break-all">
                    {contact[isArabic && contact.valueAr ? 'valueAr' : 'value']}
                  </div>
                </a>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center text-gray-500 pt-8 border-t border-cyan-400/10">
          <p>
            {isArabic 
              ? '© 2026 محمد ياسين زين العابدين. جميع الحقوق محفوظة.'
              : '© 2026 Mohammad Yaseen Zen Al Abdeen. All rights reserved.'
            }
          </p>
          <p className="text-sm mt-2">
            {isArabic
              ? 'دمشق، سوريا | طالب هندسة الحاسوب @ جامعة دمشق'
              : 'Damascus, Syria | Computer Engineering Student @ Damascus University'
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
