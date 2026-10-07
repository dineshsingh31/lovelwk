import { useEffect, useRef } from "react";

interface TiltOptions {
  max?: number; // Maximum tilt angle in degrees
  perspective?: number; // CSS perspective value
  scale?: number; // Scale on hover
  speed?: number; // Transition speed in ms
  disabled?: boolean; // Disable on reduced motion
}

/**
 * useTilt — 3D tilt effect on mouse move
 * Returns a ref to attach to the element you want to tilt.
 */
export function useTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const {
    max = 8,
    perspective = 1000,
    scale = 1.03,
    speed = 300,
    disabled = false,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || disabled) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -max;
      const rotateY = ((x - centerX) / centerX) * max;

      element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    element.style.transition = `transform ${speed}ms ease-out`;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [max, perspective, scale, speed, disabled]);

  return ref;
}
