/**
 * Animation configuration types for v2 components
 */

export interface AnimationConfig {
  /** Disable all animations for this component */
  disabled?: boolean;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Animation duration (ms) */
  duration?: number;
  /** Stagger delay between children (ms) */
  staggerDelay?: number;
}

export interface SectionAnimationConfig {
  /** Background animation type */
  background?: 'aurora' | 'gradient' | 'beams' | 'sparkles' | 'none';
  /** Entry animation type */
  entry?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'none';
  /** Enable scroll-triggered animations */
  scrollTriggered?: boolean;
}

export interface HeroAnimationConfig {
  headline?: AnimationConfig & {
    /** Words to cycle through (for flip-words) */
    flipWords?: string[];
  };
  background?: SectionAnimationConfig;
  badges?: AnimationConfig & {
    /** Direction of infinite scroll */
    direction?: 'left' | 'right';
    /** Speed of scroll */
    speed?: 'slow' | 'normal' | 'fast';
  };
}

export interface ProblemSolutionAnimationConfig {
  background?: SectionAnimationConfig;
  painPoints?: AnimationConfig;
  benefits?: AnimationConfig;
  showTracingBeam?: boolean;
}

export interface TrustProofAnimationConfig {
  background?: SectionAnimationConfig;
  testimonials?: AnimationConfig & {
    /** Auto-rotate testimonials */
    autoRotate?: boolean;
    /** Rotation interval (ms) */
    interval?: number;
  };
  badges?: AnimationConfig;
  faq?: AnimationConfig;
}

export interface ConversionFooterAnimationConfig {
  background?: SectionAnimationConfig;
  lamp?: AnimationConfig;
  cta?: AnimationConfig;
}
