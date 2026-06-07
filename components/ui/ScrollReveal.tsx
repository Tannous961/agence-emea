'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useClientMotionPrefs } from '@/lib/hooks/useClientMotionPrefs';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: ScrollRevealProps) {
  const { ready, reducedMotion } = useClientMotionPrefs();
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: once });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (inView) setRevealed(true);
  }, [inView]);

  const offsets = {
    up:    { y: 16, x: 0  },
    down:  { y: -16, x: 0 },
    left:  { y: 0,  x: 16 },
    right: { y: 0,  x: -16 },
    none:  { y: 0,  x: 0  },
  };

  const { x, y } = offsets[direction];

  // SSR + first client paint: static wrapper — identical HTML, no motion styles
  if (!ready || reducedMotion) {
    return (
      <div ref={ref} className={cn(className)}>
        {children}
      </div>
    );
  }

  const initial = { opacity: 0, x, y };
  const animate = revealed ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
