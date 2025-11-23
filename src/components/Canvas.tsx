import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';
import { animations } from '../animations';

export const Canvas: React.FC = () => {
  const { selectedAnimation, canvasElements, addCanvasElement, removeCanvasElement, clearCanvas } = useStore();
  const [isDragging, setIsDragging] = useState(false);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedAnimation || isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newElement = {
      id: `element-${Date.now()}`,
      animationId: selectedAnimation.id,
      x,
      y,
      speed: 1,
      easing: 'easeInOut',
    };

    addCanvasElement(newElement);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setTimeout(() => setIsDragging(false), 0);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Live Preview Canvas</h2>
          <p className="text-sm text-gray-600 mt-1">
            {selectedAnimation
              ? `Click on the canvas to place: ${selectedAnimation.name}`
              : 'Select an animation from the library to get started'}
          </p>
        </div>
        {canvasElements.length > 0 && (
          <button
            onClick={clearCanvas}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            Clear Canvas
          </button>
        )}
      </div>

      <div
        className="flex-1 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 cursor-crosshair"
        onClick={handleCanvasClick}
      >
        {canvasElements.map((element) => {
          const animation = animations.find((a) => a.id === element.animationId);
          if (!animation) return null;

          const Component = animation.component;

          return (
            <motion.div
              key={element.id}
              drag
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              initial={{ x: element.x - 50, y: element.y - 50 }}
              className="absolute cursor-move group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Component speed={element.speed} easing={element.easing} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCanvasElement(element.id);
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 text-xs font-bold"
                >
                  ×
                </button>
              </div>
            </motion.div>
          );
        })}

        {canvasElements.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg pointer-events-none">
            <div className="text-center">
              <svg
                className="w-24 h-24 mx-auto mb-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <p className="font-medium">Canvas is empty</p>
              <p className="text-sm mt-2">Select an animation and click to place it</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
