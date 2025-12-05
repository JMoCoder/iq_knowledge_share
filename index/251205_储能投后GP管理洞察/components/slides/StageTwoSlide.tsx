import React from 'react';
import { SlideProps } from '../../types';
import { Activity, CloudLightning, Battery } from 'lucide-react';

export const StageTwoSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
       <div className="flex items-center gap-3 mb-8">
        <span className="bg-blue-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">2</span>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">第二阶段：数据驱动的性能优化（持续运营）</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                <Activity className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">预测性维护</h4>
            <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mb-4 rounded"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                利用大数据与 AI 算法对海量运行数据建模。将传统的“被动式、计划性”运维升级为“主动的预测性维护”，最大化资产可用时间。
            </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                <CloudLightning className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">算法迭代与软件升级</h4>
            <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mb-4 rounded"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                跟踪 EMS/BMS 软件技术发展。通过远程 OTA 升级不断优化控制算法，适应新的电网调度指令和电力市场品种，挖掘“隐藏”价值。
            </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                <Battery className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">衰减管理与质保协同</h4>
            <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mb-4 rounded"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                精细化管理电池 SOH，优化充放电策略减缓衰减。将实际数据与供应商质保承诺严格比对，出现超预期衰减及时启动索赔，保障利益。
            </p>
        </div>

      </div>
    </div>
  );
};