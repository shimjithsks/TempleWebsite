import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

type RevealProps = {
  children: React.ReactNode;
  delay?: number; // ms
  distance?: number; // px translateY distance
};

export default function Reveal({ children, delay = 0, distance = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${distance}px)`,
        transition: `opacity 500ms ease, transform 500ms ease`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Box>
  );
}
