'use client';
import Image from 'next/image';
import { Language } from '@/types';
import Typewriter from './Typewriter';

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative mx-auto order-1 md:order-1">
          <div className="relative w-80 h-80 mx-auto">
            {/* Rotating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-red-600 p-1 spin-slow z-10">
              <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
            </div>
            
            {/* Image with Next.js Image component */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center overflow-hidden z-20">
              <Image
                src="/images/pfp.png"
                alt={isArabic ? "صورة محمد ياسين" : "Mohammad Yaseen"}
                fill
                sizes="(max-width: 768px) 320px, 320px"
                className="object-cover"
                priority
                quality={90}
              />
            </div>
            
            {/* Glow Effect */}
            <div className={`
              absolute inset-0 rounded-full 
              bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-red-600/20
              animate-pulse -z-10
              ${isArabic ? 'md:blur-3xl blur-xl' : 'md:blur-3xl blur-xl'}
            `} />
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center md:text-left order-2 md:order-2">
          <h1 className={`${isArabic ? 'text-3xl/[1.4] md:text-6xl/[1.35]' : 'text-4xl md:text-6xl'} font-bold mb-4 gradient-text font-orbitron`}>
            {isArabic ? (
              <>محمد ياسين<br />زين العابدين</>
            ) : (
              <>Mohammad Yaseen<br />Zen Al Abdeen</>
            )}
          </h1>
          
          <h2 className={`${isArabic ? 'text-xl/[1.5] md:text-3xl/[1.5] font-semibold' : 'text-2xl md:text-3xl font-semibold'} text-cyan-400 mb-6 font-rajdhani min-h-[3rem] md:min-h-[2.5rem] overflow-hidden`}>
            <Typewriter language={language} />
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            {isArabic 
              ? 'مطور ذو نتائج مثبتة يتمتع بخبرة في تطبيقات الويب، برمجة المتحكمات الدقيقة، والكترونيات السيارات. اصيغ حلول مبتكرة عند تقاطع البرمجيات والأجهزة، من تطبيقات Next.js إلى الأنظمة المضمنة.'
              : 'Results-driven developer with expertise in web applications, microcontroller programming, and automotive electronics. Crafting innovative solutions at the intersection of software and hardware, from Next.js applications to autonomous vehicle systems.'
            }
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a 
              href="#contact"
              className="px-6 md:px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-shadow font-rajdhani"
            >
              {isArabic ? 'تواصل معي' : 'Get in Touch'}
            </a>

            {/* DOWNLOAD CV BUTTON */}
            <a 
              href="https://drive.google.com/uc?export=download&id=1scpHgxbrFB_PE_BZE74OlGT2eu4DLHRW"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 border-2 border-cyan-400 rounded-lg font-bold hover:bg-cyan-400/10 transition-colors font-rajdhani"
            >
              {isArabic ? 'تحميل السيرة الذاتية' : 'Download CV'}
            </a>
          </div>
        </div>
      </div>

{/* Scroll Indicator */}
<div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
  <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-2">
    <div className="w-1 h-3 bg-cyan-400 rounded-full" />
  </div>
</div>
    </section>
  );
}