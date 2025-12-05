import React from 'react';
import { SlideProps } from '../../types';
import { useTheme } from '../ThemeContext';

export const SystemArchitectureSlide: React.FC<SlideProps> = () => {
  const { theme } = useTheme();
  
  const strokeColor = theme === 'dark' ? '#9ca3af' : '#4b5563'; // gray-400 : gray-600
  const boxBg = theme === 'dark' ? '#1f2937' : '#ffffff';
  const boxStroke = theme === 'dark' ? '#4b5563' : '#d1d5db';
  const textColor = theme === 'dark' ? '#e5e7eb' : '#374151';

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        储能系统技术架构概览
      </h3>

      <div className="w-full max-w-4xl flex-1 relative bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-inner">
        <svg width="100%" height="100%" viewBox="0 0 800 500" className="overflow-visible">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill={strokeColor} />
                </marker>
            </defs>

            {/* Grid / Load Area (Top) */}
            <g transform="translate(400, 50)">
                <text x="0" y="-20" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="bold">并网/离网</text>
                <circle cx="0" cy="0" r="20" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="4 4" />
                <path d="M0,-20 L0,20" stroke={strokeColor} strokeWidth="2" />
                <text x="30" y="5" textAnchor="start" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="12">断开为备用电源功能</text>
            </g>

            {/* Load Box */}
            <g transform="translate(550, 120)">
                <rect x="0" y="0" width="100" height="40" fill="#3b82f6" rx="4" />
                <text x="50" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">负载</text>
            </g>

            {/* Connecting Lines: Grid to PCS/Load */}
            <line x1="400" y1="70" x2="400" y2="140" stroke={strokeColor} strokeWidth="2" />
            <line x1="400" y1="140" x2="550" y2="140" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="400" y1="140" x2="330" y2="140" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            <text x="440" y="130" textAnchor="middle" fill={textColor} fontSize="12">AC 输入/输出</text>

            {/* PCS Box */}
            <g transform="translate(230, 120)">
                <rect x="0" y="0" width="100" height="40" fill={theme === 'dark' ? '#374151' : '#e5e7eb'} stroke={theme === 'dark' ? '#6b7280' : '#9ca3af'} strokeWidth="2" rx="4" />
                <text x="50" y="25" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="bold">PCS</text>
            </g>

            {/* Battery System Container (Big Dashed Box) */}
            <rect x="150" y="100" width="260" height="350" fill="none" stroke={theme === 'dark' ? '#4b5563' : '#9ca3af'} strokeWidth="2" rx="8" />
            <text x="160" y="115" fill={textColor} fontSize="12" fontWeight="bold">电力储能系统</text>

            {/* Inner Red Dashed Box (IEC Scope) */}
            <rect x="240" y="200" width="140" height="230" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" rx="15" />
            
            {/* Annotation for IEC */}
            <path d="M380,300 L450,300" stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} strokeWidth="1" />
            <text x="460" y="305" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="12">IEC 63056 标准范围</text>

            {/* BMS Box */}
            <g transform="translate(260, 220)">
                <rect x="0" y="0" width="100" height="40" fill="#6366f1" rx="4" />
                <text x="50" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">BMS</text>
            </g>

            {/* Connection PCS -> BMS/Battery */}
            <line x1="280" y1="160" x2="280" y2="220" stroke={strokeColor} strokeWidth="2" strokeDasharray="3 3" />
            <text x="340" y="185" textAnchor="middle" fill={textColor} fontSize="12">DC 输入/输出</text>

            {/* Battery Modules */}
            <g transform="translate(260, 280)">
                <rect x="0" y="0" width="100" height="40" fill={theme === 'dark' ? '#4b5563' : '#9ca3af'} rx="4" />
                <text x="50" y="25" textAnchor="middle" fill="white" fontSize="14">电池模组</text>
            </g>
            <line x1="310" y1="260" x2="310" y2="280" stroke={strokeColor} strokeWidth="2" />

            <g transform="translate(260, 340)">
                <rect x="0" y="0" width="100" height="40" fill={theme === 'dark' ? '#4b5563' : '#9ca3af'} rx="4" />
                <text x="50" y="25" textAnchor="middle" fill="white" fontSize="14">电池模组</text>
            </g>
             <line x1="310" y1="320" x2="310" y2="340" stroke={strokeColor} strokeWidth="2" />
        </svg>
      </div>

      <div className="mt-6 text-center text-energy-primary dark:text-teal-400 font-medium">
         储能系统核心设备：PCS（变流器）、BMS（电池管理）、电池模块
      </div>
    </div>
  );
};