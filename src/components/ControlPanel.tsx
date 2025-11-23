import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';
import { animations } from '../animations';

export const ControlPanel: React.FC = () => {
  const { selectedAnimation, canvasElements } = useStore();
  const [showCode, setShowCode] = useState(false);

  const generateCode = () => {
    if (!canvasElements.length) {
      return '// No elements on canvas';
    }

    const imports = new Set<string>();
    const elements = canvasElements.map((element) => {
      const animation = animations.find((a) => a.id === element.animationId);
      if (!animation) return '';

      const category = animation.category.toLowerCase();
      const componentName = animation.component.name;
      imports.add(`import { ${componentName} } from './animations/${category}';`);

      return `  <${componentName} speed={${element.speed}} easing="${element.easing}" />`;
    });

    const importStatements = Array.from(imports).join('\n');
    const code = `import React from 'react';
import { motion } from 'framer-motion';
${importStatements}

export const MyComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
${elements.join('\n')}
    </div>
  );
};`;

    return code;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    alert('Code copied to clipboard!');
  };

  const easingOptions = [
    'linear',
    'easeIn',
    'easeOut',
    'easeInOut',
    'circIn',
    'circOut',
    'circInOut',
    'backIn',
    'backOut',
    'backInOut',
  ];

  return (
    <div className="h-full flex flex-col bg-gray-50 border-l">
      <div className="p-4 border-b bg-white">
        <h2 className="text-xl font-bold text-gray-800">Control Panel</h2>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {selectedAnimation ? (
          <div className="bg-white rounded-lg p-4 shadow-md mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Selected Animation</h3>
            <div className="flex items-center justify-center h-32 bg-gray-100 rounded mb-2">
              <selectedAnimation.component speed={1} />
            </div>
            <p className="text-sm text-gray-600 text-center">{selectedAnimation.name}</p>
            <p className="text-xs text-gray-500 text-center">{selectedAnimation.category}</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-4 shadow-md mb-4 text-center text-gray-500">
            No animation selected
          </div>
        )}

        <div className="bg-white rounded-lg p-4 shadow-md mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">Canvas Info</h3>
          <div className="text-sm text-gray-600">
            <p>Elements on canvas: <span className="font-bold">{canvasElements.length}</span></p>
          </div>
        </div>

        {/* Speed Control - Global for demo, could be per-element */}
        <div className="bg-white rounded-lg p-4 shadow-md mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">Animation Settings</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Speed Multiplier (applies to future placements)
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Default speed: 1x (you can adjust per-element in code)
              </p>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Easing Function
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                {easingOptions.map((easing) => (
                  <option key={easing} value={easing}>
                    {easing}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t bg-white space-y-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowCode(!showCode)}
          className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          disabled={canvasElements.length === 0}
        >
          {showCode ? 'Hide Code' : 'Export React Code'}
        </motion.button>
      </div>

      {showCode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowCode(false)}
        >
          <motion.div
            className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Exported Code</h3>
              <button
                onClick={() => setShowCode(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm">
              {generateCode()}
            </pre>
            <div className="mt-4 flex gap-2">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Copy to Clipboard
              </button>
              <button
                onClick={() => setShowCode(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
