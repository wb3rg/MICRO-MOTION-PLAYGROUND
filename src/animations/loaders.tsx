import { motion } from 'framer-motion';
import type { AnimationProps } from '../store';

// Loader Animations
export const LoaderSpinner: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1 / speed, repeat: Infinity, ease: 'linear' }}
  />
);

export const LoaderDots: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <div className="flex gap-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-4 h-4 bg-purple-500 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 0.6 / speed,
          repeat: Infinity,
          delay: i * 0.15,
        }}
      />
    ))}
  </div>
);

export const LoaderBars: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <div className="flex gap-1 items-end h-16">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-2 bg-green-500"
        animate={{ height: ['20%', '100%', '20%'] }}
        transition={{
          duration: 0.8 / speed,
          repeat: Infinity,
          delay: i * 0.1,
        }}
      />
    ))}
  </div>
);

export const LoaderPulse: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-red-500 rounded-full"
    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 1 / speed, repeat: Infinity }}
  />
);

export const LoaderRipple: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <div className="relative w-16 h-16">
    {[0, 1].map((i) => (
      <motion.div
        key={i}
        className="absolute inset-0 border-4 border-yellow-500 rounded-full"
        animate={{ scale: [0, 1.5], opacity: [1, 0] }}
        transition={{
          duration: 1.5 / speed,
          repeat: Infinity,
          delay: i * 0.75,
        }}
      />
    ))}
  </div>
);

export const LoaderSquare: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <motion.div
    className="w-16 h-16 bg-indigo-500"
    animate={{ rotate: [0, 180, 360] }}
    transition={{ duration: 2 / speed, repeat: Infinity, ease: 'easeInOut' }}
  />
);

export const LoaderCircle: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <div className="relative w-16 h-16">
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-pink-500 rounded-full"
        style={{
          left: '50%',
          top: '50%',
          transformOrigin: '0 0',
        }}
        animate={{
          rotate: [i * 45, i * 45 + 360],
          x: [0, 28],
          opacity: [1, 0.2, 1],
        }}
        transition={{
          duration: 1.2 / speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
  </div>
);

export const LoaderWave: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <div className="flex gap-1 items-center h-16">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-8 bg-teal-500"
        animate={{ scaleY: [1, 1.5, 1] }}
        transition={{
          duration: 0.8 / speed,
          repeat: Infinity,
          delay: i * 0.1,
        }}
      />
    ))}
  </div>
);

export const LoaderOrbit: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <div className="relative w-16 h-16">
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 2 / speed, repeat: Infinity, ease: 'linear' }}
    >
      <div className="w-3 h-3 bg-cyan-500 rounded-full absolute" style={{ top: 0, left: '50%' }} />
    </motion.div>
  </div>
);

export const LoaderBounce: React.FC<AnimationProps> = ({ speed = 1 }) => (
  <div className="flex gap-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-4 h-4 bg-orange-500 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 0.6 / speed,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);
