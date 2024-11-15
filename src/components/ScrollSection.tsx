import React from 'react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    duration?: number;
    ease?: string;
    delay?: number;
    scrub?: boolean | number;
    start?: string;
    end?: string;
    pin?: boolean;
  };
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = '',
  animation = {},
}) => {
  const ref = useGSAPAnimation(animation);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};