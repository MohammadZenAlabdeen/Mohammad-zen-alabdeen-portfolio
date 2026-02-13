'use client';

import { useState, useEffect } from 'react';
import { JOB_TITLES } from '@/lib/data';
import { Language } from '@/types';

interface TypewriterProps {
  language: Language;
}

export default function Typewriter({ language }: TypewriterProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentTitle = JOB_TITLES[titleIndex][language];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % JOB_TITLES.length);
        }
      } else {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === currentTitle.length) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 50 : (charIndex === currentTitle.length ? 2000 : 100));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, language]);

  // Reset when language changes
  useEffect(() => {
    setCharIndex(0);
    setIsDeleting(false);
  }, [language]);

  return (
    <span className="typewriter inline-block border-r-2 border-cyan-400 pr-1 break-words max-w-full">
      {displayText}
    </span>
  );
}
