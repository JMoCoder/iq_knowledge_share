import React from 'react';
import { SlideProps } from '../../types';
import { ShieldCheck, Zap, Bike, Cpu, Server, Battery } from 'lucide-react';

export const EmsStructureSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col gap-6">
      
      {/* Part 1: Hierarchy Chain */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-l-8 border-energy-secondary dark:border-emerald-500 pl-4 transition-colors">
          指挥链：三位一体的层级关系
        </h3>
        <div className="grid grid-cols-3 gap-4">
            {/* Commander */}
            <div className="bg-white dark:bg-gray-800 border-t-4 border-indigo-600 dark:border-indigo-500 p-4 rounded shadow text-center relative transition-colors">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 dark:bg-indigo-500 text-white text-xs px-2 py-0.5 rounded">总指挥官</div>
                <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-200">EMS</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">决策层</p>
                <p className="text-sm mt-2 font-medium text-gray-900 dark:text-gray-100">为什么充? 充多少?</p>
                <p className="text-xs text-indigo-600 dark:text-indigo-300 mt-1">为了赚钱/省钱</p>
            </div>

            {/* Executor */}
            <div className="bg-white dark:bg-gray-800 border-t-4 border-emerald-600 dark:border-emerald-500 p-4 rounded shadow text-center relative transition-colors">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 dark:bg-emerald-500 text-white text-xs px-2 py-0.5 rounded">执行官</div>
                <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">PCS</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">执行层</p>
                <p className="text-sm mt-2 font-medium text-gray-900 dark:text-gray-100">怎么样充?</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-300 mt-1">交直流转换</p>
            </div>

            {/* Guardian */}
            <div className="bg-white dark:bg-gray-800 border-t-4 border-red-500 dark:border-red-500 p-4 rounded shadow text-center relative transition-colors">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">安全官</div>
                <h4 className="text-xl font-bold text-red-900 dark:text-red-200">BMS</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">保护层</p>
                <p className="text-sm mt-2 font-medium text-gray-900 dark:text-gray-100">能充吗?</p>
                <p className="text-xs text-red-600 dark:text-red-300 mt-1">一票否决权</p>
            </div>
        </div>
      </div>

      {/* Part 2: Analogy */}
      <div className="bg-slate-50 dark:bg-gray-800/50 rounded-xl p-6 border border-slate-200 dark:border-gray-700 flex-1 transition-colors">
        <h4 className="text-lg font-bold text-slate-700 dark:text-gray-200 mb-4 flex items-center gap-2">
            <Bike size={24} />
            通俗比喻：智能外卖骑手团队
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Battery className="text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300"><strong>电池</strong> = 骑手的电动车电池</span>
                </div>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="text-red-500 dark:text-red-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300"><strong>BMS</strong> = 电量显示屏与保护板 (防止过充损坏)</span>
                </div>
                <div className="flex items-center gap-3">
                    <Zap className="text-emerald-500 dark:text-emerald-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300"><strong>PCS</strong> = 电机与控制器 (转化动力)</span>
                </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-dashed border-slate-300 dark:border-gray-600 flex gap-3 items-start transition-colors">
                <Server className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-600 dark:text-gray-300">
                    <strong className="text-indigo-700 dark:text-indigo-300 block mb-1">EMS = 智能调度后台 (大脑)</strong>
                    它分析哪里订单多(电价高)、谁电量足，计算最优派单路线，指挥骑手(PCS)在最短时间内赚最多的钱。
                    <br/>
                    <span className="text-xs text-slate-400 dark:text-gray-500 mt-2 block">没有高效 EMS 的储能，就像有跑车但没有聪明司机的车队。</span>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};