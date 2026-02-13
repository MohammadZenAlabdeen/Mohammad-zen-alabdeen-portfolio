'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const colors = ['#00ffff', '#a855f7', '#dc2626'];
    const particleCount = 20; // Reduced count for mobile

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle absolute w-1 h-1 rounded-full pointer-events-none';
      
      // Keep particles within safe bounds (5% to 95% to avoid edges)
      particle.style.left = `${5 + Math.random() * 90}%`;
      particle.style.top = `${5 + Math.random() * 90}%`;
      
      particle.style.background = colors[Math.floor(Math.random() * 3)];
      particle.style.boxShadow = '0 0 10px currentColor';
      
      // Shorter animations on mobile to reduce movement
      const isMobile = window.innerWidth < 768;
      particle.style.animationDuration = `${isMobile ? 3 + Math.random() * 5 : 5 + Math.random() * 10}s`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particle.style.opacity = isMobile ? '0.4' : '0.6'; // Lower opacity on mobile
      
      particlesRef.current.appendChild(particle);
    }

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none grid-bg" />
      
      {/* Floating Particles - Add overflow-hidden and max-w-full */}
      <div 
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none overflow-hidden max-w-full"
        aria-hidden="true"
      />
    </>
  );
}