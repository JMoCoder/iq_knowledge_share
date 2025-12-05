import React from 'react';
import { Presentation } from './components/Presentation';
import { ThemeProvider } from './components/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="h-full w-full bg-gray-900 dark:bg-gray-950 flex items-center justify-center p-4 sm:p-8 transition-colors duration-300 relative">
        <a 
          href="../index.html" 
          className="absolute top-4 left-4 z-50 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors text-sm font-medium flex items-center gap-2"
          style={{ textDecoration: 'none' }}
        >
          ← 返回课堂
        </a>
        <div className="w-full max-w-7xl aspect-video bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl overflow-hidden relative border border-gray-700 transition-colors duration-300">
          <Presentation />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;