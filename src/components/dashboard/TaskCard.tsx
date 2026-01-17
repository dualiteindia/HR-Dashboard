
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Task } from '../../types';

export const TaskCard: React.FC<{ task: Task }> = ({ task }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between min-h-[140px]">
    <h4 className="text-sm font-semibold text-gray-800 leading-snug mb-4">{task.title}</h4>
    <div className="flex justify-between items-end">
      <div>
        <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">End In</p>
        <p className="text-xl font-bold">{task.endIn}</p>
      </div>
      <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-shadow shadow-lg">
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);
