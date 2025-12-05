import React from 'react';
import { SlideProps } from '../../types';
import { Eye, Brain, Mic, FileText, Cpu } from 'lucide-react';

export const EmsIntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-energy-primary dark:bg-teal-600 rounded-lg text-white">
            <Cpu size={32} />
          </div>
          EMS：储能系统的“智慧大脑”
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg ml-16">
          Energy Management System (能量管理系统) —— 集成软硬件的最高决策中枢
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Eyes and Ears */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Eye size={24} />
            </div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg">1. 数据采集 (The Eyes & Ears)</h4>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-2 border-l-2 border-blue-100 dark:border-blue-900 pl-3">
            <li><strong className="text-blue-700 dark:text-blue-400">对内：</strong>实时采集 BMS（SOC、电压）和 PCS（功率、状态）底层数据。</li>
            <li><strong className="text-blue-700 dark:text-blue-400">对外：</strong>获取电价信号、调度指令、负载数据及光伏预测。</li>
          </ul>
        </div>

        {/* 2. The Brain */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border-l-4 border-energy-primary dark:border-teal-500 shadow-md hover:shadow-lg transition-all group relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-energy-primary dark:bg-teal-600 text-white text-xs px-2 py-1 rounded-bl-lg">核心价值</div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-energy-light dark:bg-gray-700 p-2 rounded-full text-energy-primary dark:text-teal-400 group-hover:bg-energy-primary group-hover:text-white transition-colors">
              <Brain size={24} />
            </div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg">2. 策略制定 (The Brain)</h4>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-2 pl-3">
            <li className="mb-1">基于算法做出最高级决策：</li>
            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-energy-primary dark:bg-teal-400 rounded-full"></span><span><strong>经济性优化：</strong>峰谷套利、需量管理。</span></li>
            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-energy-primary dark:bg-teal-400 rounded-full"></span><span><strong>辅助服务：</strong>调频、调峰。</span></li>
            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-energy-primary dark:bg-teal-400 rounded-full"></span><span><strong>协同控制：</strong>光储协同、微电网调度。</span></li>
          </ul>
        </div>

        {/* 3. The Mouth */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Mic size={24} />
            </div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg">3. 指令执行 (The Mouth)</h4>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 ml-2 border-l-2 border-orange-100 dark:border-orange-900 pl-3">
            <li><strong className="text-orange-700 dark:text-orange-400">下达指令：</strong>向 PCS 发送具体功率指令（如“充电 500kW”）。</li>
            <li><strong className="text-orange-700 dark:text-orange-400">安全边界：</strong>严格在 BMS 设定的安全范围内操作，绝不发出“危险指令”。</li>
          </ul>
        </div>

        {/* 4. The Reporter */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <FileText size={24} />
            </div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg">4. 分析可视 (The Reporter)</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 ml-2 border-l-2 border-purple-100 dark:border-purple-900 pl-3 leading-relaxed">
            记录所有运行数据，生成报表。
            <br/>
            清晰展示：运行状态、RTE、SOH 以及最重要的——<strong className="text-purple-700 dark:text-purple-400">经济收益分析</strong>。
          </p>
        </div>
      </div>
    </div>
  );
};