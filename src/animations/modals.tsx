import { motion } from 'framer-motion';
import type { AnimationProps } from '../store';

// Modal/Notification Animations
export const ModalFadeIn: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-64 bg-white rounded-lg shadow-xl p-6 text-gray-800"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 / speed }}
  >
    <h3 className="font-bold text-lg">Fade Modal</h3>
    <p className="mt-2 text-sm">This modal fades in</p>
  </motion.div>
);

export const ModalSlideUp: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-64 bg-white rounded-lg shadow-xl p-6 text-gray-800"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 / speed }}
  >
    <h3 className="font-bold text-lg">Slide Up Modal</h3>
    <p className="mt-2 text-sm">This modal slides up</p>
  </motion.div>
);

export const ModalSlideDown: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-64 bg-white rounded-lg shadow-xl p-6 text-gray-800"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 / speed }}
  >
    <h3 className="font-bold text-lg">Slide Down Modal</h3>
    <p className="mt-2 text-sm">This modal slides down</p>
  </motion.div>
);

export const ModalScale: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-64 bg-white rounded-lg shadow-xl p-6 text-gray-800"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3 / speed, type: 'spring' }}
  >
    <h3 className="font-bold text-lg">Scale Modal</h3>
    <p className="mt-2 text-sm">This modal scales in</p>
  </motion.div>
);

export const NotificationSlideRight: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-72 bg-green-500 text-white rounded-lg shadow-lg p-4"
    initial={{ x: 400 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.4 / speed }}
  >
    <h4 className="font-bold">Success!</h4>
    <p className="text-sm mt-1">This notification slides in from right</p>
  </motion.div>
);

export const NotificationSlideLeft: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-72 bg-blue-500 text-white rounded-lg shadow-lg p-4"
    initial={{ x: -400 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.4 / speed }}
  >
    <h4 className="font-bold">Info</h4>
    <p className="text-sm mt-1">This notification slides in from left</p>
  </motion.div>
);

export const NotificationBounce: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-72 bg-purple-500 text-white rounded-lg shadow-lg p-4"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 / speed, type: 'spring', bounce: 0.5 }}
  >
    <h4 className="font-bold">Bounce!</h4>
    <p className="text-sm mt-1">This notification bounces in</p>
  </motion.div>
);

export const NotificationShake: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-72 bg-red-500 text-white rounded-lg shadow-lg p-4"
    animate={{ x: [0, -10, 10, -10, 10, 0] }}
    transition={{ duration: 0.5 / speed }}
  >
    <h4 className="font-bold">Error!</h4>
    <p className="text-sm mt-1">This notification shakes</p>
  </motion.div>
);

export const NotificationFadeSlide: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-72 bg-yellow-500 text-white rounded-lg shadow-lg p-4"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4 / speed }}
  >
    <h4 className="font-bold">Warning</h4>
    <p className="text-sm mt-1">This notification fades and slides</p>
  </motion.div>
);

export const NotificationPop: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-72 bg-pink-500 text-white rounded-lg shadow-lg p-4"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3 / speed, type: 'spring', stiffness: 500 }}
  >
    <h4 className="font-bold">Pop!</h4>
    <p className="text-sm mt-1">This notification pops in</p>
  </motion.div>
);
