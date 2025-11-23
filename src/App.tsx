import { Header } from './components/Header';
import { AnimationLibrary } from './components/AnimationLibrary';
import { Canvas } from './components/Canvas';
import { ControlPanel } from './components/ControlPanel';

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        {/* Animation Library - Left Side */}
        <div className="w-full md:w-1/3 lg:w-1/4 border-r overflow-hidden">
          <AnimationLibrary />
        </div>

        {/* Canvas - Center */}
        <div className="hidden md:flex md:flex-1 overflow-hidden">
          <Canvas />
        </div>

        {/* Control Panel - Right Side */}
        <div className="hidden lg:block lg:w-80 overflow-hidden">
          <ControlPanel />
        </div>
      </div>

      {/* Mobile Canvas (full screen overlay when needed) */}
      <div className="md:hidden fixed inset-0 top-16 bg-white z-40 hidden" id="mobile-canvas">
        <Canvas />
      </div>
    </div>
  );
}

export default App;

