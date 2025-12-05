import React from 'react';
import { SlideProps } from '../../types';
import { Activity, BatteryWarning, TrendingDown, DollarSign, Recycle } from 'lucide-react';

export const SohIntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-energy-secondary dark:bg-emerald-600 rounded-lg text-white">
            <Activity size={32} />
          </div>
          SOH：电池资产的“体检报告”
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg ml-16">
          State of Health (电池健康状态) —— 量化电池“衰老”程度的核心指标
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: What is SOH? */}
        <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors h-full">
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b pb-2 border-gray-100 dark:border-gray-700">
                    SOH 衡量的两个核心维度
                </h4>
                
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">1</div>
                        </div>
                        <div>
                            <h5 className="font-bold text-gray-700 dark:text-gray-200 text-lg">容量衰减 (Capacity Fade)</h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                                最直观的标准。指充满电后能储存的最大电量 vs 出厂额定容量。
                            </p>
                            <div className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-2 rounded mt-2 border border-blue-100 dark:border-blue-800">
                                <strong>核心结论：</strong>当 SOH = 80% 时，通常意味着：
                                <ul className="list-disc list-inside mt-1 space-y-1">
                                    <li>可用容量只剩出厂时的 80%（续航打折）。</li>
                                    <li><strong>大功率放电能力也已显著下降</strong>（动力不足）。</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="mt-1">
                            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">2</div>
                        </div>
                        <div>
                            <h5 className="font-bold text-gray-700 dark:text-gray-200 text-lg">内阻增加 (Resistance Increase)</h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                                电池老化后内部电阻增大，导致两大负面影响：
                            </p>
                             <ul className="text-xs text-gray-500 dark:text-gray-400 mt-2 space-y-1">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500 mt-0.5">•</span>
                                    <span><strong>功率下降：</strong>就像一位年迈的运动员，虽然还有耐力（容量），但爆发力（功率）已大不如前。</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500 mt-0.5">•</span>
                                    <span><strong>产热增加：</strong>根据 P=I²R，内阻越大发热越多，加速老化并带来安全风险。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Why it matters? */}
        <div className="flex flex-col justify-between">
             <div className="bg-energy-light dark:bg-gray-800/50 p-6 rounded-xl border border-energy-primary/20 dark:border-gray-700 h-full transition-colors flex flex-col">
                <h4 className="text-xl font-bold text-energy-primary dark:text-teal-400 mb-6">
                    为何 SOH 至关重要？
                </h4>

                <div className="flex-1 grid gap-4 content-start">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-start gap-3 transition-colors group hover:shadow-md">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                            <BatteryWarning size={20} />
                        </div>
                        <div>
                            <h5 className="font-bold text-gray-800 dark:text-gray-200 text-sm">决定经济寿命 (EOL)</h5>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                当 SOH 降至 <strong>70%-80%</strong> 时，通常被视为寿命终点。
                                <br/>此时虽然还能用，但已无法满足最初设计的商业回报模型。
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-start gap-3 transition-colors group hover:shadow-md">
                         <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                            <DollarSign size={20} />
                        </div>
                        <div>
                            <h5 className="font-bold text-gray-800 dark:text-gray-200 text-sm">资产估值的基石</h5>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                电池是储能最贵的部件。SOH 直接决定剩余价值和预期收益，是 GP 进行交易和风险控制的基础。
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-start gap-3 transition-colors group hover:shadow-md">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                            <Recycle size={20} />
                        </div>
                        <div>
                            <h5 className="font-bold text-gray-800 dark:text-gray-200 text-sm">指导梯次利用</h5>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                “退役”后（SOH &lt; 80%）能否降级用于低速电动车或家庭储能？SOH 是关键判断依据。
                            </p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};