import React from 'react';
import { SlideProps } from '../../types';
import { Shield, Eye, Bell, Lock } from 'lucide-react';

export const SafetySlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">贯彻“预防为主”的安全支持体系</h3>
        <p className="text-gray-500 dark:text-gray-400">GP 必须主导建立一个超越合规、追求卓越的安全管理体系。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Box 1 */}
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 flex gap-4 items-start border border-red-100 dark:border-red-900/30 transition-colors">
            <Shield className="text-red-600 dark:text-red-400 mt-1 flex-shrink-0" size={28} />
            <div>
                <h4 className="font-bold text-red-900 dark:text-red-200 text-lg mb-2">建立独立的安全审计机制</h4>
                <p className="text-sm text-red-800 dark:text-red-300">
                    定期聘请独立第三方机构进行全面“体检”。覆盖从电芯材料、系统集成、消防设计到运营规程的全链条。
                </p>
                <div className="mt-2 text-xs font-mono bg-red-100 dark:bg-red-900/50 inline-block px-2 py-1 rounded text-red-700 dark:text-red-300">
                    基准：NFPA 855 | IEC 62933 | GB/T 36276
                </div>
            </div>
        </div>

        {/* Box 2 */}
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 flex gap-4 items-start border border-amber-100 dark:border-amber-900/30 transition-colors">
            <Eye className="text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" size={28} />
            <div>
                <h4 className="font-bold text-amber-900 dark:text-amber-200 text-lg mb-2">强化实时监控与智能预警</h4>
                <p className="text-sm text-amber-800 dark:text-amber-300">
                    7x24 小时监测电压、电流、温度、烟雾等参数。
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-300 mt-1 font-semibold">
                    应用 AI 算法，实现对热失控早期特征（如特定气体、温度异常）的精准识别与秒级预警。
                </p>
            </div>
        </div>

        {/* Box 3 */}
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 flex gap-4 items-start border border-orange-100 dark:border-orange-900/30 transition-colors">
            <Bell className="text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" size={28} />
            <div>
                <h4 className="font-bold text-orange-900 dark:text-orange-200 text-lg mb-2">完善应急预案与常态化演练</h4>
                <p className="text-sm text-orange-800 dark:text-orange-300">
                    制定详尽、可操作的预案。将应急演练常态化、实战化，确保人员熟练掌握技能。演练后复盘以优化预案。
                </p>
            </div>
        </div>

        {/* Box 4 */}
        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 flex gap-4 items-start border border-slate-200 dark:border-slate-700 transition-colors">
            <Lock className="text-slate-600 dark:text-slate-400 mt-1 flex-shrink-0" size={28} />
            <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-200 text-lg mb-2">重视网络安全 (Cyber Security)</h4>
                <p className="text-sm text-slate-800 dark:text-slate-300">
                    建立工控层面的防护体系。包括防火墙、入侵检测、权限管理等，防止黑客攻击导致系统瘫痪或恶意操作。
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};