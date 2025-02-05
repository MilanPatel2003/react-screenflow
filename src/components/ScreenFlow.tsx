import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const animations = {
  elegantSlide: {
    initial: { 
      opacity: 0, 
      x: -30,
      filter: 'blur(10px)'
    },
    animate: { 
      opacity: 1, 
      x: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1] // Custom cubic bezier for smooth motion
      }
    },
    exit: { 
      opacity: 0, 
      x: 30,
      filter: 'blur(10px)',
      transition: { 
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
  },
  smoothFade: {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: { 
        duration: 0.4,
        ease: 'easeIn'
      }
    },
  },
  materialScale: {
    initial: { 
      opacity: 0, 
      scale: 0.85,
      y: 30
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] // Material Design easing
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.85,
      y: -30,
      transition: { 
        duration: 0.4,
        ease: [0.4, 0, 1, 1]
      }
    },
  },
  cardFlip: {
    initial: { 
      opacity: 0,
      rotateX: 45,
      y: 50
    },
    animate: { 
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: { 
      opacity: 0,
      rotateX: -45,
      y: -50,
      transition: { 
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
  },
  elastic: {
    initial: { 
      opacity: 0,
      scale: 0.9,
      y: 30
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      y: -30,
      transition: { 
        duration: 0.4,
        ease: 'easeIn'
      }
    },
  },
  swoosh: {
    initial: { 
      opacity: 0,
      x: 100,
      rotate: 5,
      scale: 0.9
    },
    animate: { 
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      opacity: 0,
      x: -100,
      rotate: -5,
      scale: 0.9,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
  }
};

interface ScreenFlowProps {
  children: React.ReactNode;
  animation?: keyof typeof animations;
  className?: string;
  mode?: "wait" | "sync" | "popLayout";
}

const ScreenFlow: React.FC<ScreenFlowProps> = ({ 
  children, 
  animation = 'elegantSlide',
  className = '',
  mode = "wait"
}) => {
  return (
    <AnimatePresence mode={mode}>
      <motion.div
        key={window.location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animations[animation]}
        className={`transform-gpu ${className}`} // Using GPU acceleration for smoother animations
        style={{ 
          backfaceVisibility: 'hidden', // Prevents flicker in some browsers
          willChange: 'transform, opacity' // Hints browser to optimize for these properties
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScreenFlow;