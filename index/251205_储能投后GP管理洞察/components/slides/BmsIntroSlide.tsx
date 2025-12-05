import React from 'react';
import { SlideProps } from '../../types';
import { ShieldAlert, Activity, Scale, Eye, Network, GraduationCap, BatteryWarning } from 'lucide-react';

export const BmsIntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-red-600 rounded-lg text-white">
            <ShieldAlert size={32} />
          </div>
          BMS：电池组的“专属保姆”
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg ml-16">
          Battery Management System (电池管理系统) —— 电池安全的终极防线与神经中枢
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto">
        
        {/* Left Column: 5 Core Functions */}
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* 1. Monitoring */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex gap-3 transition-colors">
                    <div className="text-blue-500 bg-blue-50 dark:bg-blue-900/20 p-2 rounded h-fit"><Eye size={20}/></div>
                    <div>
                        <h5 className="font-bold text-gray-800 dark:text-gray-100 text-sm">1. 监测 (Sensing)</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            7x24h 采集电压、电流、温度。防止过充过放及热失控。
                        </p>
                    </div>
                </div>

                {/* 2. Analysis */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex gap-3 transition-colors">
                    <div className="text-purple-500 bg-purple-50 dark:bg-purple-900/20 p-2 rounded h-fit"><Activity size={20}/></div>
                    <div>
                        <h5 className="font-bold text-gray-800 dark:text-gray-100 text-sm">2. 计算 (Analysis)</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <strong>SOC:</strong> 剩多少电<br/>
                            <strong>SOH:</strong> 电池多老<br/>
                            <strong>SOP:</strong> 功率极限
                        </p>
                    </div>
                </div>

                {/* 3. Protection */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border-l-4 border-red-500 shadow-sm flex gap-3 transition-colors md:col-span-2">
                    <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded h-fit"><ShieldAlert size={20}/></div>
                    <div>
                        <h5 className="font-bold text-gray-800 dark:text-gray-100 text-sm">3. 保护 (Protection) - 核心安全</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            一旦参数越界，立即<strong>主动干预</strong>（切断继电器/接触器）。防止短路、过热、起火。
                        </p>
                    </div>
                </div>

                {/* 4. Balancing */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex gap-3 transition-colors">
                    <div className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded h-fit"><Scale size={20}/></div>
                    <div>
                        <h5 className="font-bold text-gray-800 dark:text-gray-100 text-sm">4. 均衡 (Balancing)</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            “削高补低”，解决电芯不一致性，延长木桶短板。
                        </p>
                    </div>
                </div>

                {/* 5. Communication */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex gap-3 transition-colors">
                    <div className="text-orange-500 bg-orange-50 dark:bg-orange-900/20 p-2 rounded h-fit"><Network size={20}/></div>
                    <div>
                        <h5 className="font-bold text-gray-800 dark:text-gray-100 text-sm">5. 通信 (Comms)</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            电池的“代言人”。向 PCS/EMS 汇报状态，控制热管理系统。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Analogy */}
        <div className="flex flex-col gap-4">
            <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4">
                    <GraduationCap size={140} />
                </div>
                
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10 border-b border-gray-600 pb-2">
                    <GraduationCap className="text-yellow-400" />
                    通俗比喻：班主任与学生
                </h4>
                
                <div className="space-y-4 relative z-10 text-sm">
                    <div className="flex items-center gap-2 text-gray-300 text-xs mb-2 italic">
                        <span>大型电池组 = 一个班级</span>
                        <span className="mx-1">|</span>
                        <span>电芯 = 学生</span>
                    </div>

                    <ul className="space-y-3">
                        <li className="flex gap-3">
                            <div className="bg-blue-500/20 p-1 rounded text-blue-400 flex-shrink-0"><Eye size={14}/></div>
                            <div>
                                <strong className="block text-blue-200 text-xs">关注身体状况 (监测)</strong>
                                <span className="text-gray-400 text-xs">时刻盯着每个学生的体温、血压 (电压/温度)。</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="bg-purple-500/20 p-1 rounded text-purple-400 flex-shrink-0"><Activity size={14}/></div>
                            <div>
                                <strong className="block text-purple-200 text-xs">评估学习状态 (计算)</strong>
                                <span className="text-gray-400 text-xs">计算还有多少“精力”(SOC) 和“潜力”(SOH)。</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="bg-red-500/20 p-1 rounded text-red-400 flex-shrink-0"><ShieldAlert size={14}/></div>
                            <div>
                                <strong className="block text-red-200 text-xs">制止危险行为 (保护)</strong>
                                <span className="text-gray-400 text-xs">学生生病或捣乱时，立即制止 (切断电路)。</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="bg-emerald-500/20 p-1 rounded text-emerald-400 flex-shrink-0"><Scale size={14}/></div>
                            <div>
                                <strong className="block text-emerald-200 text-xs">齐头并进 (均衡)</strong>
                                <span className="text-gray-400 text-xs">帮差生、等快生，不让任何一个人掉队。</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-900/50 p-4 rounded-xl flex items-center gap-3">
                <BatteryWarning className="text-red-600 dark:text-red-400 flex-shrink-0" size={24} />
                <p className="text-xs text-red-800 dark:text-red-200 font-semibold">
                    结论：没有 BMS 的锂电池组是“裸奔”，极不安全且效率低下。
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};