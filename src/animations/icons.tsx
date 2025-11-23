import { motion } from 'framer-motion';
import type { AnimationProps } from '../store';

// Icon/Shape Animations
export const IconSpin: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl"
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.5 / speed }}
  >
    ⚙
  </motion.div>
);

export const IconBounce: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 1 / speed, repeat: Infinity }}
  >
    ⭐
  </motion.div>
);

export const IconWobble: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl"
    whileHover={{ rotate: [0, 10, -10, 10, 0] }}
    transition={{ duration: 0.5 / speed }}
  >
    ❤️
  </motion.div>
);

export const IconPulse: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 1 / speed, repeat: Infinity }}
  >
    ✓
  </motion.div>
);

export const IconFlip: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl"
    whileHover={{ rotateY: 180 }}
    transition={{ duration: 0.4 / speed }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    🔄
  </motion.div>
);

export const IconGrow: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl"
    whileHover={{ scale: 1.3 }}
    transition={{ duration: 0.3 / speed }}
  >
    📈
  </motion.div>
);

export const IconShrink: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl"
    whileHover={{ scale: 0.8 }}
    transition={{ duration: 0.3 / speed }}
  >
    📉
  </motion.div>
);

export const IconShake: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl"
    whileHover={{ x: [-5, 5, -5, 5, 0] }}
    transition={{ duration: 0.4 / speed }}
  >
    🔔
  </motion.div>
);

export const IconFloat: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-2xl"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2 / speed, repeat: Infinity, ease: 'easeInOut' }}
  >
    ☁️
  </motion.div>
);

export const IconBlink: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1 / speed, repeat: Infinity }}
  >
    💡
  </motion.div>
);
