import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { animations, categories } from '../animations';
import { useStore } from '../store';

export const AnimationLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { setSelectedAnimation } = useStore();

  const filteredAnimations = animations.filter((animation) => {
    const matchesCategory = selectedCategory === 'All' || animation.category === selectedCategory;
    const matchesSearch = animation.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAnimationClick = (animation: typeof animations[0]) => {
    setSelectedAnimation(animation);
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="p-4 border-b bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Animation Library</h2>
        
        <input
          type="text"
          placeholder="Search animations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'All'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All ({animations.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredAnimations.map((animation) => (
            <motion.div
              key={animation.id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnimationClick(animation)}
            >
              <div className="flex items-center justify-center h-32 mb-3 bg-gray-100 rounded">
                <div className="scale-75">
                  <animation.component speed={1} />
                </div>
              </div>
              <h3 className="font-semibold text-center text-gray-800 text-sm">
                {animation.name}
              </h3>
              <p className="text-xs text-gray-500 text-center mt-1">
                {animation.category}
              </p>
            </motion.div>
          ))}
        </div>

        {filteredAnimations.length === 0 && (
          <div className="flex items-center justify-center h-64 text-gray-500">
            No animations found
          </div>
        )}
      </div>
    </div>
  );
};
