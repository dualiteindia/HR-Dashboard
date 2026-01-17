
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export const AttendanceReportHeatmap: React.FC = () => {
  const hours = ['11.00', '10.00', '09.30', '09.00', '08.30'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  
  const gridData = [
    [1, 1, 2, 2, 3],
    [1, 3, 2, 3, 1],
    [3, 4, 3, 4, 3],
    [5, 4, 5, 4, 5],
    [5, 5, 4, 5, 4],
  ];

  const getShade = (val: number) => {
    switch(val) {
      case 1: return 'bg-blue-100';
      case 2: return 'bg-blue-200';
      case 3: return 'bg-blue-300';
      case 4: return 'bg-blue-500 shadow-lg scale-105';
      case 5: return 'bg-blue-600 shadow-xl scale-110';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">Attendance Report</h3>
          <p className="text-xs text-gray-400">Real-time employee attendance report</p>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="flex flex-col justify-between text-xs text-gray-400 h-64 pr-2">
          {hours.map(h => <span key={h}>{h}</span>)}
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-5 gap-3 h-64">
            {gridData.map((row, i) => (
              <React.Fragment key={i}>
                {row.map((cell, j) => (
                  <div key={`${i}-${j}`} className={`rounded-md transition-all duration-300 ${getShade(cell)}`}></div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-3 mt-4">
            {days.map(d => (
              <span key={d} className="text-center text-xs text-gray-400 font-medium">{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
