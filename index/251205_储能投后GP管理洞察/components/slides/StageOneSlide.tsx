import React from 'react';
import { SlideProps } from '../../types';
import { Search, Settings, BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../ThemeContext';

export const StageOneSlide: React.FC<SlideProps> = () => {
  const { theme } = useTheme();
  const dummyKpiData = [
    { name: 'RTE 效率', value: 92, target: 95 },
    { name: '可用率', value: 98, target: 99 },
    { name: 'SOH 健康度', value: 96, target: 100 },
  ];
  
  const chartTextColor = theme === 'dark' ? '#9ca3af' : '#4b5563';
  const chartGridColor = theme === 'dark' ? '#374151' : '#e5e7eb';
  const barColor = theme === 'dark' ? '#2dd4bf' : '#0f766e'; // teal-400 : teal-700
  const targetColor = theme === 'dark' ? '#4b5563' : '#e5e7eb';

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-energy-primary dark:bg-teal-600 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">1</span>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">第一阶段：技术基线核定与优化（投后百日）</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 transition-colors">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 h-fit rounded-lg">
                    <Search className="text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">全面技术复核 (Technical Re-DD)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">对核心设备（电芯、PCS、BMS、EMS）进行独立性能基准测试。核实是否与尽调及采购合同一致。</p>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 transition-colors">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 h-fit rounded-lg">
                    <Settings className="text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">运营策略评估</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">分析 EMS 控制策略。评估在电力市场交易（如峰谷套利、调频）中的响应速度、预测精度和经济性，寻找即时优化空间。</p>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 transition-colors">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 h-fit rounded-lg">
                    <BarChart2 className="text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">建立 KPI 监测体系</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">设立科学、量化的关键绩效指标（系统往返效率 RTE、可用率、衰减速率）。部署自动数据采集，实现“CT 扫描”。</p>
                </div>
            </div>
        </div>

        {/* Visual Decoration / Chart */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 flex flex-col border border-gray-100 dark:border-gray-700 transition-colors">
            <h4 className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase">KPI 基线可视化 (示意图)</h4>
            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dummyKpiData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={chartGridColor} />
                        <XAxis dataKey="name" tick={{ fill: chartTextColor }} axisLine={{ stroke: chartTextColor }} />
                        <YAxis tick={{ fill: chartTextColor }} axisLine={{ stroke: chartTextColor }} />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                                borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                                color: theme === 'dark' ? '#f3f4f6' : '#111827'
                            }}
                        />
                        <Bar dataKey="value" fill={barColor} name="当前值" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="target" fill={targetColor} name="目标值" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-2">关键指标：RTE、可用率、SOH</div>
        </div>
      </div>
    </div>
  );
};