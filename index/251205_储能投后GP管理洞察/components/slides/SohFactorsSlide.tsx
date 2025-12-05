import React from 'react';
import { SlideProps } from '../../types';
import { Thermometer, Zap, Calendar, RotateCw, Smartphone, CheckCircle, Battery } from 'lucide-react';

export const SohFactorsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
          影响 SOH 的“隐形杀手”
        </h3>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8">
        
        {/* Left: Factors Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-900/30 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-red-700 dark:text-red-300 font-bold">
                    <Thermometer size={20} />
                    <span>温度 (第一杀手)</span>
                </div>
                <p className="text-xs text-red-600 dark:text-red-400">
                    过高或过低都会急剧加速老化。高温尤甚。
                </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-900/30 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-orange-700 dark:text-orange-300 font-bold">
                    <Zap size={20} />
                    <span>充放电倍率 (C-rate)</span>
                </div>
                <p className="text-xs text-orange-600 dark:text-orange-400">
                    长期大电流快充快放，压力巨大，加速衰减。
                </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-900/30 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-yellow-700 dark:text-yellow-400 font-bold">
                    <Battery size={20} />
                    <span>放电深度 (DoD)</span>
                </div>
                <p className="text-xs text-yellow-700 dark:text-yellow-400">
                    深度循环（每次用光）比浅充浅放对电池损耗更大。
                </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-300 font-bold">
                    <RotateCw size={20} />
                    <span>循环次数 (Cycle Life)</span>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                    用的越多，老的越快。物理规律不可逆。
                </p>
            </div>

             <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300 font-bold">
                    <Calendar size={20} />
                    <span>日历寿命 (Calendar Life)</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    即使不用，电池也会随时间自然老化。
                </p>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900/30 transition-colors">
                 <div className="flex items-center gap-2 mb-2 text-indigo-800 dark:text-indigo-200 font-bold">
                     <CheckCircle size={20} />
                     <span>质保索赔依据</span>
                 </div>
                 <p className="text-xs text-indigo-700 dark:text-indigo-300">
                     通常承诺：10年/5000次后 SOH ≥ 80%。
                 </p>
            </div>
        </div>

        {/* Right: Analogy */}
        <div className="w-full md:w-1/3 bg-gray-900 text-white rounded-xl p-6 flex flex-col justify-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Smartphone size={120} />
            </div>
            
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                <Smartphone className="text-energy-primary" />
                <span>简单比喻：智能手机</span>
            </h4>
            
            <div className="space-y-6 relative z-10 text-sm text-gray-300">
                <div className="flex gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p>
                        <strong className="text-white block">新机入手 (100%)</strong>
                        续航持久，反应迅速。
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p>
                        <strong className="text-white block">两年以后 (85%)</strong>
                        设置里看到最大容量下降。感觉不如以前耐用，需要频繁充电。这就是 SOH 下降。
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p>
                        <strong className="text-white block">性能受限 (80%)</strong>
                        系统提示“电池维修”或性能降频。储能系统也是如此，80% 即意味着该退役了。
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};