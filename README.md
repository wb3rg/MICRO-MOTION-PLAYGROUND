# MICRO-MOTION-PLAYGROUND

🎨 A React/TypeScript playground for exploring and exporting Framer Motion micro-interactions.

![Micro-Motion Playground](https://img.shields.io/badge/animations-60+-blue) ![React](https://img.shields.io/badge/react-19.x-blue) ![TypeScript](https://img.shields.io/badge/typescript-5.x-blue) ![Tailwind](https://img.shields.io/badge/tailwind-3.x-blue) ![Framer Motion](https://img.shields.io/badge/framer--motion-latest-purple)

## ✨ Features

- 🎯 **60+ Micro-Interactions** - Pre-built animations across 6 categories
- 🎨 **Visual Library** - Browse animations in an organized grid view
- 🖱️ **Drag & Drop** - Place animations on a live preview canvas
- ⚡ **Real-time Preview** - See animations in action instantly
- 🎚️ **Tweakable Parameters** - Adjust speed and easing functions
- 💻 **Code Export** - Generate ready-to-use React code
- 📱 **Mobile Responsive** - Works on all device sizes
- 🎭 **Category Filtering** - Filter by Buttons, Cards, Icons, Text, Loaders, and Modals

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/wb3rg/MICRO-MOTION-PLAYGROUND.git

# Navigate to the directory
cd MICRO-MOTION-PLAYGROUND

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser to `http://localhost:5173` and start exploring!

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Zustand** - State management
- **Tailwind CSS** - Styling

## 📦 Animation Categories

### 🔘 Buttons (10 animations)
- Bounce, Pulse, Shake, Slide, Rotate
- Glow, Flip, Expand, Squeeze, Jiggle

### 🎴 Cards (10 animations)
- Float, Tilt, Flip, Zoom, Bounce
- Slide, Rotate, Expand, Shake, Pulse

### 🎯 Icons (10 animations)
- Spin, Bounce, Wobble, Pulse, Flip
- Grow, Shrink, Shake, Float, Blink

### 📝 Text (10 animations)
- Fade, Slide (Up/Down/Left/Right)
- Scale, Rotate, Bounce, Wave, Glow

### ⏳ Loaders (10 animations)
- Spinner, Dots, Bars, Pulse, Ripple
- Square, Circle, Wave, Orbit, Bounce

### 🔔 Modals & Notifications (10 animations)
- Modal: Fade, Slide Up/Down, Scale
- Notifications: Slide, Bounce, Shake, Fade, Pop

## 🎮 How to Use

1. **Browse** - Explore the animation library on the left
2. **Select** - Click an animation to select it
3. **Place** - Click on the canvas to place the animation
4. **Arrange** - Drag elements to reposition them
5. **Export** - Click "Export React Code" to get the code
6. **Copy** - Copy the generated code to your clipboard

## 🎨 Customization

Each animation supports:
- **Speed multiplier** - Control animation duration
- **Easing functions** - Choose from 10+ easing options
- **Positioning** - Drag and drop to arrange

## 📝 Code Export Example

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ButtonBounce } from './animations/buttons';

export const MyComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ButtonBounce speed={1} easing="easeInOut" />
    </div>
  );
};
```

## 🏗️ Project Structure

```
src/
├── animations/          # Animation components
│   ├── buttons.tsx
│   ├── cards.tsx
│   ├── icons.tsx
│   ├── text.tsx
│   ├── loaders.tsx
│   ├── modals.tsx
│   └── index.ts
├── components/          # UI components
│   ├── AnimationLibrary.tsx
│   ├── Canvas.tsx
│   ├── ControlPanel.tsx
│   └── Header.tsx
├── store/              # Zustand store
│   └── index.ts
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎯 Inspiration

Inspired by:
- [r/motiondesign](https://reddit.com/r/motiondesign) - Motion design community
- [Uiverse.io](https://uiverse.io) - UI animations collection
- Framer Motion examples and documentation

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new animations
- Improve existing ones
- Fix bugs
- Enhance documentation

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🔗 Links

- [Live Demo](#) (Coming soon)
- [GitHub Repository](https://github.com/wb3rg/MICRO-MOTION-PLAYGROUND)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

---

Made with ❤️ and ⚡ by [wb3rg](https://github.com/wb3rg)
