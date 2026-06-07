'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useClientMotionPrefs } from '@/lib/hooks/useClientMotionPrefs';

export function CustomCursor() {
  const { ready, reducedMotion } = useClientMotionPrefs();
  const [pos, setPos]         = useState({ x: -200, y: -200 });
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!ready || reducedMotion) {
      document.body.classList.remove('cursor-custom');
      return;
    }

    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (mq.matches) {
      document.body.classList.add('cursor-custom');
    }

    const handleMQChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('cursor-custom');
      } else {
        document.body.classList.remove('cursor-custom');
      }
    };
    mq.addEventListener('change', handleMQChange);

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
        const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
        if (el) {
          const cursor = window.getComputedStyle(el).cursor;
          setIsHover(cursor === 'pointer');
        }
      });
    };

    const leave  = () => setIsVisible(false);
    const enter  = () => setIsVisible(true);

    document.addEventListener('mousemove', move,  { passive: true });
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      document.body.classList.remove('cursor-custom');
      mq.removeEventListener('change', handleMQChange);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready, reducedMotion]);

  if (!ready || reducedMotion) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isHover ? 1.8 : 1,
        }}
        transition={{ duration: 0.04, ease: 'linear' }}
        aria-hidden="true"
      >
        <span className="block w-2 h-2 rounded-full bg-[#0000FF]" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block"
        animate={{
          x: pos.x - (isHover ? 22 : 16),
          y: pos.y - (isHover ? 22 : 16),
          width:  isHover ? 44 : 32,
          height: isHover ? 44 : 32,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <span
          className="block w-full h-full rounded-full border"
          style={{ borderColor: isHover ? '#111111' : 'rgba(17,17,17,0.45)' }}
        />
      </motion.div>
    </>
  );
}
