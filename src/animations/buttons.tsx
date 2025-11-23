import { motion } from 'framer-motion';
import type { AnimationProps } from '../store';

// Button Animations
export const ButtonBounce: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17, duration: 0.3 / speed }}
  >
    Bounce Me
  </motion.button>
);

export const ButtonPulse: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold"
    whileHover={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 0.5 / speed, repeat: Infinity }}
  >
    Pulse Me
  </motion.button>
);

export const ButtonShake: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold"
    whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
    transition={{ duration: 0.4 / speed }}
  >
    Shake Me
  </motion.button>
);

export const ButtonSlide: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold relative overflow-hidden"
    whileHover="hover"
  >
    <motion.div
      className="absolute inset-0 bg-green-600"
      variants={{
        hover: { x: 0 },
      }}
      initial={{ x: '-100%' }}
      transition={{ duration: 0.3 / speed }}
    />
    <span className="relative z-10">Slide Me</span>
  </motion.button>
);

export const ButtonRotate: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold"
    whileHover={{ rotate: 5 }}
    transition={{ duration: 0.2 / speed }}
  >
    Rotate Me
  </motion.button>
);

export const ButtonGlow: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold"
    whileHover={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)' }}
    transition={{ duration: 0.3 / speed }}
  >
    Glow Me
  </motion.button>
);

export const ButtonFlip: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold"
    whileHover={{ rotateY: 180 }}
    transition={{ duration: 0.4 / speed }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    Flip Me
  </motion.button>
);

export const ButtonExpand: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold"
    whileHover={{ paddingLeft: '2rem', paddingRight: '2rem' }}
    transition={{ duration: 0.3 / speed }}
  >
    Expand Me
  </motion.button>
);

export const ButtonSqueeze: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold"
    whileHover={{ scaleX: 0.9 }}
    transition={{ duration: 0.2 / speed }}
  >
    Squeeze Me
  </motion.button>
);

export const ButtonJiggle: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.button
    className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold"
    whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
    transition={{ duration: 0.5 / speed }}
  >
    Jiggle Me
  </motion.button>
);
