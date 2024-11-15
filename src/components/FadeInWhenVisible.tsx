import { motion } from 'framer-motion';
import React from 'react';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay * 0.1,
          ease: [0.4, 0, 0.2, 1]
        }
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};