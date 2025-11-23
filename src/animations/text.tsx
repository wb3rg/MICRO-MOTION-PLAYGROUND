import { motion } from 'framer-motion';
import type { AnimationProps } from '../store';

// Text Animations
export const TextFade: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 / speed }}
  >
    Fade In Text
  </motion.h2>
);

export const TextSlideUp: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 / speed }}
  >
    Slide Up Text
  </motion.h2>
);

export const TextSlideDown: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 / speed }}
  >
    Slide Down Text
  </motion.h2>
);

export const TextSlideLeft: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 / speed }}
  >
    Slide Left Text
  </motion.h2>
);

export const TextSlideRight: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 / speed }}
  >
    Slide Right Text
  </motion.h2>
);

export const TextScale: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 / speed, type: 'spring' }}
  >
    Scale Text
  </motion.h2>
);

export const TextRotate: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    initial={{ rotate: -180, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    transition={{ duration: 0.6 / speed }}
  >
    Rotate Text
  </motion.h2>
);

export const TextBounce: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-gray-800"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 0.6 / speed, repeat: Infinity }}
  >
    Bounce Text
  </motion.h2>
);

export const TextWave: React.FC<AnimationProps> = ({ speed = 1 }) => {
  const text = "Wave Text";
  return (
    <div className="flex text-3xl font-bold text-gray-800">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.5 / speed,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export const TextGlow: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.h2
    className="text-3xl font-bold text-blue-500"
    animate={{ textShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 1)', '0 0 0px rgba(59, 130, 246, 0)'] }}
    transition={{ duration: 2 / speed, repeat: Infinity }}
  >
    Glow Text
  </motion.h2>
);
