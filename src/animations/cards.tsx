import { motion } from 'framer-motion';
import type { AnimationProps } from '../store';

// Card Animations
export const CardFloat: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 / speed }}
  >
    <h3 className="font-bold">Float Card</h3>
    <p className="text-sm mt-2">Hover to float</p>
  </motion.div>
);

export const CardTilt: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ rotateX: 10, rotateY: 10 }}
    transition={{ duration: 0.3 / speed }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <h3 className="font-bold">Tilt Card</h3>
    <p className="text-sm mt-2">Hover to tilt</p>
  </motion.div>
);

export const CardFlip: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ rotateY: 180 }}
    transition={{ duration: 0.5 / speed }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <h3 className="font-bold">Flip Card</h3>
    <p className="text-sm mt-2">Hover to flip</p>
  </motion.div>
);

export const CardZoom: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ scale: 1.15 }}
    transition={{ duration: 0.3 / speed }}
  >
    <h3 className="font-bold">Zoom Card</h3>
    <p className="text-sm mt-2">Hover to zoom</p>
  </motion.div>
);

export const CardBounce: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ y: [0, -10, 0] }}
    transition={{ duration: 0.5 / speed, repeat: Infinity }}
  >
    <h3 className="font-bold">Bounce Card</h3>
    <p className="text-sm mt-2">Hover to bounce</p>
  </motion.div>
);

export const CardSlide: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg p-4 text-white shadow-lg relative overflow-hidden"
    whileHover="hover"
  >
    <motion.div
      className="absolute inset-0 bg-white/20"
      variants={{
        hover: { x: 0 },
      }}
      initial={{ x: '-100%' }}
      transition={{ duration: 0.4 / speed }}
    />
    <div className="relative z-10">
      <h3 className="font-bold">Slide Card</h3>
      <p className="text-sm mt-2">Hover to slide</p>
    </div>
  </motion.div>
);

export const CardRotate: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ rotate: 5 }}
    transition={{ duration: 0.3 / speed }}
  >
    <h3 className="font-bold">Rotate Card</h3>
    <p className="text-sm mt-2">Hover to rotate</p>
  </motion.div>
);

export const CardExpand: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-teal-400 to-green-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ scale: 1.05, height: '10rem' }}
    transition={{ duration: 0.3 / speed }}
  >
    <h3 className="font-bold">Expand Card</h3>
    <p className="text-sm mt-2">Hover to expand</p>
  </motion.div>
);

export const CardShake: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ x: [-2, 2, -2, 2, 0] }}
    transition={{ duration: 0.4 / speed }}
  >
    <h3 className="font-bold">Shake Card</h3>
    <p className="text-sm mt-2">Hover to shake</p>
  </motion.div>
);

export const CardPulse: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-48 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-4 text-white shadow-lg"
    whileHover={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 0.6 / speed, repeat: Infinity }}
  >
    <h3 className="font-bold">Pulse Card</h3>
    <p className="text-sm mt-2">Hover to pulse</p>
  </motion.div>
);
