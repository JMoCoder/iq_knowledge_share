import React from 'react';
import { SlideProps } from '../../types';
import { Zap, ShieldCheck, Activity } from 'lucide-react';

export const TitleSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`h-full flex flex-col justify-center items-center text-center space-y-8 ${isActive ? 'animate-fade-in-up' : ''}`}>
      <div className="bg-energy-light dark:bg-gray-800 p-6 rounded-full mb-6 transition-colors duration-300">
        <Zap size={64} className="text-energy-primary dark:text-teal-400" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight max-w-5xl">
        <span className="text-energy-primary dark:text-teal-400">价值守护</span> 与 <span className="text-energy-secondary dark:text-emerald-400">风险穿越</span>
      </h1>
      
      <h2 className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
        储能 GP 投后管理的技术与安全赋能之道
      </h2>

      <div className="mt-12 flex gap-8 text-gray-500 dark:text-gray-400">
        <div className="flex flex-col items-center gap-2">
            <ShieldCheck size={24} />
            <span className="text-sm">安全为本</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <Activity size={24} />
            <span className="text-sm">技术驱动</span>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-energy-primary to-energy-secondary dark:from-teal-500 dark:to-emerald-500" />
    </div>
  );
};