import React from 'react';
import { SlideProps } from '../../types';
import { RefreshCw, Network } from 'lucide-react';

export const StageThreeSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
       <div className="flex items-center gap-3 mb-8">
        <span className="bg-purple-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">3</span>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">第三阶段：资产升级与价值再造（长期持有）</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch h-2/3">
        
        <div className="flex-1 bg-white dark:bg-gray-800 border-l-4 border-purple-500 dark:border-purple-400 shadow-md rounded-r-xl p-8 flex flex-col justify-center transition-colors">
            <div className="flex items-center gap-4 mb-4">
                <RefreshCw className="text-purple-600 dark:text-purple-400" size={36} />
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">技术改造评估</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
                定期评估对现有资产进行技术改造的可行性与经济性。
            </p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400 list-disc list-inside">
                <li>更换能量密度更高、安全性更好的电芯。</li>
                <li>升级更高效的 PCS。</li>
                <li>升级热管理系统。</li>
            </ul>
        </div>

        <div className="flex-1 bg-white dark:bg-gray-800 border-l-4 border-purple-500 dark:border-purple-400 shadow-md rounded-r-xl p-8 flex flex-col justify-center transition-colors">
            <div className="flex items-center gap-4 mb-4">
                <Network className="text-purple-600 dark:text-purple-400" size={36} />
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">功能拓展规划</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
                结合电网发展和政策变化，前瞻性地规划资产功能的拓展。
            </p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400 list-disc list-inside">
                <li>从单一的峰谷套利拓展至更多元化服务。</li>
                <li>参与“虚拟电厂” (VPP)。</li>
                <li>提升资产的长期竞争力。</li>
            </ul>
        </div>

      </div>
    </div>
  );
};