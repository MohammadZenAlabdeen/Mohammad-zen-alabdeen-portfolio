'use client';

import { useRef, MouseEvent, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export default function Card3D({ children, className }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

 // Inside Card3D component...
const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
  if (!cardRef.current || !innerRef.current) return;

  const rect = cardRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // FLIPPED SIGNS: 
  // centerY - y makes the bottom tilt away when touched at the bottom
  // x - centerX makes the right tilt away when touched at the right
  const rotateX = (centerY - y) / 10; 
  const rotateY = (x - centerX) / 10;

  innerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.98, 0.98, 0.98)`;
};

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    innerRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      className={cn('card-3d perspective-1000', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={innerRef}
        className="card-3d-inner transform-gpu transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </div>
  );
}
