# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MICRO-MOTION-PLAYGROUND is a React/TypeScript playground for exploring and exporting Framer Motion micro-interactions. It provides 60+ pre-built animations across 6 categories (Buttons, Cards, Icons, Text, Loaders, Modals) with a visual library, drag-and-drop canvas, and code export functionality.

**Tech Stack**: React 19, TypeScript, Vite, Framer Motion, Zustand, Tailwind CSS

## Development Commands

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Lint codebase
npm run lint

# Preview production build
npm run preview
```

## Architecture

### State Management (Zustand)

The application uses a single Zustand store (`src/store/index.ts`) that manages:
- `selectedAnimation`: Currently selected animation from the library
- `canvasElements`: Array of animation instances placed on the canvas
- Store actions: `setSelectedAnimation`, `addCanvasElement`, `updateCanvasElement`, `removeCanvasElement`, `clearCanvas`

### Animation System

**Animation Registry** (`src/animations/index.ts`):
- Central registry exporting all 60+ animations
- Each animation is an object with: `{ id, name, category, component }`
- Categories are automatically derived from the animation array

**Animation Components** (`src/animations/`):
- Organized by category: `buttons.tsx`, `cards.tsx`, `icons.tsx`, `text.tsx`, `loaders.tsx`, `modals.tsx`
- Each animation component accepts props: `{ speed?: number, easing?: string }`
- All animations are built using Framer Motion's `<motion.*>` components

**Adding New Animations**:
1. Create the animation component in the appropriate category file (e.g., `src/animations/buttons.tsx`)
2. Export the component from that file
3. Register it in `src/animations/index.ts` with a unique ID, name, category, and component reference
4. The animation will automatically appear in the library

### UI Components

**Three-Panel Layout** (`src/App.tsx`):
- **Left Panel**: `AnimationLibrary` - Browse and select animations, filter by category
- **Center Panel**: `Canvas` - Live preview area where users place and drag animations
- **Right Panel**: `ControlPanel` - Adjust parameters and export code

**Canvas Component** (`src/components/Canvas.tsx`):
- Handles click-to-place interaction for selected animations
- Manages drag-and-drop positioning using Framer Motion's drag feature
- Each canvas element is rendered at position (x, y) with configurable speed and easing
- Elements can be removed individually or cleared all at once

### Data Flow

1. User selects animation in `AnimationLibrary` → Updates `selectedAnimation` in store
2. User clicks on `Canvas` → Creates new `CanvasElement` with position and default settings
3. User drags element → Position updates via Framer Motion drag
4. User modifies settings in `ControlPanel` → Updates canvas element properties
5. User exports code → `ControlPanel` generates React code from canvas elements

## TypeScript Configuration

- `tsconfig.json`: Base TypeScript configuration
- `tsconfig.app.json`: App-specific settings (extends base)
- `tsconfig.node.json`: Node/Vite-specific settings

The build process runs `tsc -b` (build mode) before Vite bundling.

## Common Development Patterns

### Creating Animation Components

All animation components should follow this pattern:

```tsx
export const MyAnimation: React.FC<AnimationProps> = ({ speed = 1, easing = 'easeInOut' }) => {
  return (
    <motion.div
      animate={{ /* animation properties */ }}
      transition={{
        duration: 1 / speed,
        ease: easing,
        // other transition settings
      }}
    >
      {/* Component content */}
    </motion.div>
  );
};
```

### Working with the Store

Import and use the Zustand store:

```tsx
import { useStore } from '../store';

const { selectedAnimation, canvasElements, addCanvasElement } = useStore();
```

## Styling

- Tailwind CSS v4 with PostCSS
- Configuration in `tailwind.config.js`
- Main gradient background: `from-gray-100 to-gray-200`
- Responsive design: Mobile (single panel), Tablet (2 panels), Desktop (3 panels)
