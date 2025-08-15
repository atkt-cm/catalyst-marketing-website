"use client";

import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface LazyMotionWrapperProps {
  children: ReactNode;
}

// Lazy-loaded motion wrapper to reduce bundle size
export function LazyMotionWrapper({ children }: LazyMotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}

// Pre-configured motion components for common use cases
export const MotionDiv = m.div;
export const MotionSection = m.section;
export const MotionButton = m.button;

// Export AnimatePresence for page transitions
export { AnimatePresence };

// Common animation variants to reuse
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
