import React from 'react';
import { SlideProps } from '../../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '../ThemeContext';

export const ContextSlide: React.FC<SlideProps> = () => {
  const { theme } = useTheme();
  
  // Data representing the shift in market perception
  const data = [
    { name: '过去 (Past)', 可选项: 80, 必需品: 20 },
    { name: '现在 (Now)', 可选项: 15, 必需品: 85 },
  ];

  const textColor = theme === 'dark' ? '#9ca3af' : '#4b5563';
  const gridColor = theme === 'dark' ? '#374151' : '#e5e7eb';

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 border-l-8 border-energy-primary dark:border-teal-500 pl-4 transition-colors">
        转变：从“可选项”到“必需品”
      </h3>
      
      <div className="flex-1 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            随着全球能源结构向清洁化、低碳化深度转型，储能已成为资本竞逐的核心赛道。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 transition-colors">
            <p className="font-semibold text-blue-900 dark:text-blue-300">
              “完成投资决策仅仅是万里长征的第一步。”
            </p>
          </div>
          <p>
            储能资产作为技术密集型、安全敏感型的新型基础设施，其投后管理的复杂性和专业性远超传统资产。
          </p>
          <p className="font-bold text-energy-secondary dark:text-emerald-400">
            系统化的技术与安全支持体系，不仅是防范“黑天鹅”的防火墙，更是驱动资产价值持续增长的核心引擎。
          </p>
        </div>

        <div className="w-full md:w-1/3 h-64 md:h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl p-4 transition-colors border border-gray-100 dark:border-gray-700">
            <h4 className="text-center font-semibold text-gray-500 dark:text-gray-400 mb-6">市场认知结构的演变</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                barSize={40}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                <XAxis dataKey="name" tick={{ fill: textColor }} axisLine={{ stroke: textColor }} />
                <YAxis unit="%" tick={{ fill: textColor }} axisLine={{ stroke: textColor }} />
                <Tooltip 
                  cursor={{ fill: theme === 'dark' ? '#374151' : '#f3f4f6' }}
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                    color: theme === 'dark' ? '#f3f4f6' : '#111827'
                  }}
                />
                <Legend verticalAlign="bottom" height={36} />
                <Bar dataKey="可选项" stackId="a" fill="#9ca3af" name="可选项 (Option)" />
                <Bar dataKey="必需品" stackId="a" fill="#0f766e" name="必需品 (Necessity)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};