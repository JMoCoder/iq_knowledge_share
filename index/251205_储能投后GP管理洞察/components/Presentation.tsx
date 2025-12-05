import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Sun, Moon } from 'lucide-react';
import { TitleSlide } from './slides/TitleSlide';
import { ContextSlide } from './slides/ContextSlide';
import { ChallengesSlide } from './slides/ChallengesSlide';
import { SystemArchitectureSlide } from './slides/SystemArchitectureSlide';
import { PcsIntroSlide } from './slides/PcsIntroSlide';
import { BmsIntroSlide } from './slides/BmsIntroSlide';
import { EmsIntroSlide } from './slides/EmsIntroSlide';
import { EmsStructureSlide } from './slides/EmsStructureSlide';
import { SohIntroSlide } from './slides/SohIntroSlide';
import { SohFactorsSlide } from './slides/SohFactorsSlide';
import { FrameworkSlide } from './slides/FrameworkSlide';
import { StageOneSlide } from './slides/StageOneSlide';
import { StageTwoSlide } from './slides/StageTwoSlide';
import { StageThreeSlide } from './slides/StageThreeSlide';
import { SafetySlide } from './slides/SafetySlide';
import { ConclusionSlide } from './slides/ConclusionSlide';
import { SlideData } from '../types';
import { useTheme } from './ThemeContext';

const SLIDES: SlideData[] = [
  { id: 0, component: TitleSlide, title: "封面" },
  { id: 1, component: ContextSlide, title: "背景" },
  { id: 2, component: ChallengesSlide, title: "核心挑战" },
  { id: 3, component: SystemArchitectureSlide, title: "技术架构图解" },
  { id: 4, component: PcsIntroSlide, title: "技术深潜：PCS 心脏" },
  { id: 5, component: BmsIntroSlide, title: "技术深潜：BMS 保姆" },
  { id: 6, component: EmsIntroSlide, title: "技术深潜：EMS 大脑" },
  { id: 7, component: EmsStructureSlide, title: "技术深潜：指挥链" },
  { id: 8, component: SohIntroSlide, title: "技术深潜：SOH 概览" },
  { id: 9, component: SohFactorsSlide, title: "技术深潜：SOH 因素" },
  { id: 10, component: FrameworkSlide, title: "框架概览" },
  { id: 11, component: StageOneSlide, title: "第一阶段：投后百日" },
  { id: 12, component: StageTwoSlide, title: "第二阶段：持续运营" },
  { id: 13, component: StageThreeSlide, title: "第三阶段：长期持有" },
  { id: 14, component: SafetySlide, title: "安全体系" },
  { id: 15, component: ConclusionSlide, title: "结论" },
];

export const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide].component;
  const progress = ((currentSlide + 1) / SLIDES.length) * 100;

  return (
    <div className="h-full w-full flex flex-col relative bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header / Top Bar */}
      <div className="h-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 z-10 transition-colors duration-300">
        <div className="text-sm font-semibold text-energy-primary dark:text-teal-400 flex items-center gap-2">
           <span className="bg-energy-primary text-white text-xs px-2 py-1 rounded">GP</span>
           <span>储能投后管理的技术与安全赋能</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <div className="text-gray-400 dark:text-gray-500 text-xs">
            第 {currentSlide + 1} 页 / 共 {SLIDES.length} 页
          </div>
        </div>
      </div>

      {/* Main Slide Content Area */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col transition-opacity duration-500 ease-in-out dark:text-gray-100">
            <CurrentSlideComponent isActive={true} />
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 z-10 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300'}`}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition ${currentSlide === SLIDES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300'}`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 mx-8 max-w-xl h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-energy-primary dark:bg-teal-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-gray-400 dark:text-gray-500 text-xs hidden sm:block">
           使用键盘方向键切换幻灯片
        </div>
      </div>
    </div>
  );
};