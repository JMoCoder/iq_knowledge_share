import React from 'react';
import { SlideProps } from '../../types';
import { AlertTriangle, Cpu } from 'lucide-react';

export const ChallengesSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 border-l-8 border-red-500 pl-4 transition-colors">
        为何这是投后管理的“生命线”？
      </h3>
      <p className="mb-8 text-gray-500 dark:text-gray-400 pl-6">储能资产的价值实现高度依赖于其长期、稳定、高效且安全的运行。</p>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Challenge 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                <Cpu className="text-orange-600 dark:text-orange-400" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">1. 技术风险的动态演变</h4>
          </div>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              <span><strong>高速迭代：</strong> 电池能量密度、循环寿命及 BMS 算法效率不断进步。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              <span><strong>落后风险：</strong> 已投项目面临技术相对落后、性能衰减超预期的风险。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              <span><strong>运营错配：</strong> 既有策略可能无法最优匹配市场变化。</span>
            </li>
          </ul>
        </div>

        {/* Challenge 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                <AlertTriangle className="text-red-600 dark:text-red-400" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">2. 安全风险的绝对高压</h4>
          </div>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
              <span><strong>本质安全：</strong> 热失控引发的火灾甚至爆炸风险是悬在头顶的“达摩克利斯之剑”。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
              <span><strong>毁灭性打击：</strong> 一起事故足以摧毁项目，甚至重创基金声誉。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
              <span><strong>合规压力：</strong> 全球范围内的安全标准与监管政策日趋严格。</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};