
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export const CompanyJobLevels: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">Company Job Levels</h3>
          <p className="text-xs text-gray-400">Job level distribution in your company</p>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="h-20 w-full flex space-x-1 mb-6">
        {Array.from({ length: 40 }).map((_, idx) => (
          <div 
            key={idx} 
            className={`flex-1 rounded-full ${idx < 15 ? 'bg-emerald-400' : idx < 32 ? 'bg-blue-600' : 'bg-blue-300'}`}
          />
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-4xl font-bold">3982 <span className="text-sm font-normal text-gray-400">Total employer and staff</span></h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <span className="text-sm text-gray-600">Internship and Contract</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold">789 People</span>
            <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full font-bold">34%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
            <span className="text-sm text-gray-600">Staff</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold">2110 People</span>
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-bold">53%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-300"></div>
            <span className="text-sm text-gray-600">CEO and Director</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold">382 People</span>
            <span className="text-xs bg-blue-50 text-blue-300 px-2 py-1 rounded-full font-bold">13%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
