import { create } from 'zustand';

export interface Animation {
  id: string;
  name: string;
  category: string;
  component: React.ComponentType<AnimationProps>;
}

export interface AnimationProps {
  speed?: number;
  easing?: string;
}

export interface CanvasElement {
  id: string;
  animationId: string;
  x: number;
  y: number;
  speed: number;
  easing: string;
}

interface Store {
  selectedAnimation: Animation | null;
  canvasElements: CanvasElement[];
  setSelectedAnimation: (animation: Animation | null) => void;
  addCanvasElement: (element: CanvasElement) => void;
  updateCanvasElement: (id: string, updates: Partial<CanvasElement>) => void;
  removeCanvasElement: (id: string) => void;
  clearCanvas: () => void;
}

export const useStore = create<Store>((set) => ({
  selectedAnimation: null,
  canvasElements: [],
  setSelectedAnimation: (animation) => set({ selectedAnimation: animation }),
  addCanvasElement: (element) =>
    set((state) => ({ canvasElements: [...state.canvasElements, element] })),
  updateCanvasElement: (id, updates) =>
    set((state) => ({
      canvasElements: state.canvasElements.map((el) =>
        el.id === id ? { ...el, ...updates } : el
      ),
    })),
  removeCanvasElement: (id) =>
    set((state) => ({
      canvasElements: state.canvasElements.filter((el) => el.id !== id),
    })),
  clearCanvas: () => set({ canvasElements: [] }),
}));
