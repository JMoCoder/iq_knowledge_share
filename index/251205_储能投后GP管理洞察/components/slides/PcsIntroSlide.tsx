import React from 'react';
import { SlideProps } from '../../types';
import { ArrowLeftRight, Zap, ShieldCheck, Settings, Activity, Droplets } from 'lucide-react';

export const PcsIntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-lg text-white">
            <ArrowLeftRight size={32} />
          </div>
          PCS：储能系统的“心脏”
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg ml-16">
          Power Conversion System (功率转换系统/储能变流器) —— 能量双向流动的关口
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-y-auto">
        
        {/* Left Column: Core Functions & Animation */}
        <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">核心功能：AC/DC 双向变换</h4>
                
                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg relative overflow-hidden">
                    <div className="text-center z-10">
                        <div className="text-2xl font-bold text-gray-700 dark:text-gray-200">AC</div>
                        <div className="text-xs text-gray-500">电网/负载</div>
                        <div className="text-xs text-gray-400">(交流电)</div>
                    </div>

                    <div className="flex-1 mx-4 h-1 bg-gray-300 dark:bg-gray-600 relative rounded">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                             <ArrowLeftRight size={20} className="animate-pulse" />
                        </div>
                    </div>

                    <div className="text-center z-10">
                        <div className="text-2xl font-bold text-gray-700 dark:text-gray-200">DC</div>
                        <div className="text-xs text-gray-500">电池组</div>
                        <div className="text-xs text-gray-400">(直流电)</div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded text-xs font-bold">充电</span>
                        <span>AC <ArrowLeftRight className="inline w-3 h-3"/> DC：将电网交流电存入电池。</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-xs font-bold">放电</span>
                        <span>DC <ArrowLeftRight className="inline w-3 h-3"/> AC：将电池直流电输送回电网。</span>
                    </div>
                </div>
            </div>

            {/* Analogy Box */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-700 dark:to-blue-700 p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
                 <Droplets className="absolute top-4 right-4 opacity-20 w-24 h-24" />
                 <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Activity /> 简单比喻：水库与水泵
                 </h4>
                 <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 p-3 rounded backdrop-blur-sm">
                        <div className="font-bold text-cyan-100 mb-1">电池 = 水库</div>
                        <p className="opacity-90">储存能量（水）的容器。</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded backdrop-blur-sm border border-white/30">
                        <div className="font-bold text-white mb-1">PCS = 智能水泵</div>
                        <p className="opacity-90">控制水是进还是出，以及水流的速度和压力。</p>
                    </div>
                 </div>
            </div>
        </div>

        {/* Right Column: Key Roles */}
        <div className="grid grid-cols-1 gap-4 content-start">
             <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500 shadow-sm flex gap-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded text-indigo-600 dark:text-indigo-400 h-fit">
                    <Settings size={20} />
                </div>
                <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-100">1. 能量调度的枢纽</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        精确控制充放电过程，决定能量的流向、流量和速度。
                    </p>
                </div>
             </div>

             <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500 shadow-sm flex gap-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded text-amber-600 dark:text-amber-400 h-fit">
                    <Zap size={20} />
                </div>
                <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-100">2. 电能质量的保证</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        稳定电压频率，校正功率因数，确保输出符合电网标准。
                    </p>
                </div>
             </div>

             <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm flex gap-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded text-red-600 dark:text-red-400 h-fit">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-100">3. 系统安全的守护者</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        具备过压、过流保护。与 BMS 通信，确保保护性充放电。
                    </p>
                </div>
             </div>

             <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500 shadow-sm flex gap-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded text-purple-600 dark:text-purple-400 h-fit">
                    <Activity size={20} />
                </div>
                <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-100">4. 多种应用实现</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        削峰填谷、平滑波动、UPS、电网调频等。
                    </p>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};