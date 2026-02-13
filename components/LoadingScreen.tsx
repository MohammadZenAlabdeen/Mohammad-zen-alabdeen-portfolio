'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#0a0a0f] flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-32 h-32 border-4 border-transparent border-t-cyan-400 border-r-purple-500 border-b-red-600 rounded-full animate-spin" />
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-red-600/20 rounded-full animate-pulse" />
        </div>
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.8)]" />
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-cyan-400 font-orbitron font-bold tracking-wider">
            INITIALIZING...
          </span>
        </div>
      </div>
    </div>
  );
}
