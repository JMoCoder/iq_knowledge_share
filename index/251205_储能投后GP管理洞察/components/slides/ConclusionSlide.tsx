import React from 'react';
import { SlideProps } from '../../types';
import { Award } from 'lucide-react';

export const ConclusionSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-12">
      <div className={`transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <Award size={80} className="text-energy-primary dark:text-teal-400 mx-auto mb-6" />
        
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 max-w-4xl leading-tight">
          投后管理是一场围绕技术与安全的 <span className="text-energy-secondary dark:text-emerald-400">价值再造</span>。
        </h3>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          通过建立专业、主动、深入的技术与安全支持体系，GP 不仅能守护好基金资产的“基本盘”，更能挖掘潜力，提升最终回报。
        </p>
      </div>

      <div className={`bg-gray-900 dark:bg-gray-700 text-white p-8 rounded-xl max-w-4xl shadow-2xl transition-all duration-1000 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <p className="text-lg md:text-xl font-medium italic">
          “在一个日益拥挤的赛道中，卓越的投后管理能力，特别是硬核的技术与安全赋能，将成为顶尖 GP 最坚实的护城河和最闪亮的品牌名片。”
        </p>
      </div>
    </div>
  );
};