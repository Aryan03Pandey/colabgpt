import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
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
}

export const useGSAPAnimation = (
  config: AnimationConfig = {},
  deps: any[] = []
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      opacity = 0,
      y = 50,
      x = 0,
      scale = 1,
      duration = 1,
      ease = 'power2.out',
      delay = 0,
      scrub = false,
      start = 'top 80%',
      end = 'bottom 20%',
      pin = false,
    } = config;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        pin,
        markers: false,
      },
    });

    tl.from(element, {
      opacity,
      y,
      x,
      scale,
      duration,
      ease,
      delay,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, deps);

  return elementRef;
};