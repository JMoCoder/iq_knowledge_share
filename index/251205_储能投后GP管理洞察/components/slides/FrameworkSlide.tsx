import React from 'react';
import { SlideProps } from '../../types';
import { ArrowRight } from 'lucide-react';

export const FrameworkSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="text-center mb-12">
         <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            构建三阶段、全方位的技术支持框架
         </h3>
         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            GP 应主导或协同专业的第三方机构，建立覆盖全生命周期的技术支持体系。
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stage 1 */}
        <div className="relative group">
            <div className="absolute inset-0 bg-energy-primary opacity-5 dark:opacity-10 rounded-xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative border-t-4 border-energy-primary dark:border-teal-500 bg-white dark:bg-gray-800 p-6 rounded-b-xl shadow-sm h-full flex flex-col transition-colors">
                <div className="text-4xl font-bold text-gray-200 dark:text-gray-700 mb-2">01</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">投后百日</h4>
                <p className="text-sm font-semibold text-energy-primary dark:text-teal-400 mb-4 uppercase tracking-wider">技术基线核定与优化</p>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 flex-1">
                    <li>• 全面技术复核 (Technical Re-DD)</li>
                    <li>• 运营策略评估</li>
                    <li>• 建立 KPI 监测体系 ("CT 扫描")</li>
                </ul>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-3 z-10 text-gray-300 dark:text-gray-600">
                <ArrowRight />
            </div>
        </div>

        {/* Stage 2 */}
        <div className="relative group">
             <div className="absolute inset-0 bg-blue-600 opacity-5 dark:opacity-10 rounded-xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative border-t-4 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-800 p-6 rounded-b-xl shadow-sm h-full flex flex-col transition-colors">
                <div className="text-4xl font-bold text-gray-200 dark:text-gray-700 mb-2">02</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">持续运营</h4>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">数据驱动的性能优化</p>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 flex-1">
                    <li>• 预测性维护 (AI)</li>
                    <li>• 算法迭代与软件升级 (OTA)</li>
                    <li>• 衰减管理与质保协同</li>
                </ul>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-3 z-10 text-gray-300 dark:text-gray-600">
                <ArrowRight />
            </div>
        </div>

        {/* Stage 3 */}
        <div className="relative group">
             <div className="absolute inset-0 bg-purple-600 opacity-5 dark:opacity-10 rounded-xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative border-t-4 border-purple-600 dark:border-purple-500 bg-white dark:bg-gray-800 p-6 rounded-b-xl shadow-sm h-full flex flex-col transition-colors">
                <div className="text-4xl font-bold text-gray-200 dark:text-gray-700 mb-2">03</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">长期持有</h4>
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4 uppercase tracking-wider">资产升级与价值再造</p>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 flex-1">
                    <li>• 技术改造评估</li>
                    <li>• 功能拓展规划 (虚拟电厂)</li>
                    <li>• 提升长期竞争力</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};