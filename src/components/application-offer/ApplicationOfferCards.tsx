
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ApplicantCardProps { 
  name: string; 
  role: string; 
  exp: string; 
  active?: boolean;
}

export const ApplicantCard: React.FC<ApplicantCardProps> = ({ name, role, exp, active }) => (
  <div className={`p-6 rounded-[32px] mb-6 w-full ${active ? 'bg-white shadow-xl shadow-blue-500/5' : 'bg-white/50'}`}>
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <img src={`https://i.pravatar.cc/150?u=${name}`} alt="" className="w-12 h-12 rounded-xl object-cover" />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-400 font-medium">{role} • {exp}</p>
        </div>
      </div>
      <button className={`p-2 rounded-xl ${active ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-6">
      <div>
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight mb-1">Hard Skills</p>
        <p className="text-lg font-bold text-gray-800">1029</p>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight mb-1">Soft Skills</p>
        <p className="text-lg font-bold text-gray-800">1352</p>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight mb-1">Ovr. Score</p>
        <p className="text-lg font-bold text-gray-800">1174</p>
      </div>
    </div>

    <div className="pt-4 border-t border-gray-50">
      <p className="text-sm font-bold text-gray-900 mb-4">Past Experience</p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Drupal, Inc.</p>
            <p className="text-[10px] text-gray-400">2022 - 2024 • 2 Years 3 Month</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
            <div className="w-4 h-4 bg-emerald-500 rounded-sm"></div>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Slack, Inc.</p>
            <p className="text-[10px] text-gray-400">2020 - 2022 • 2 Years 8 Month</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DetailField: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className }) => (
  <div className={`p-4 bg-gray-50 rounded-2xl ${className}`}>
    <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">{label}</p>
    <p className="text-sm font-semibold text-gray-800">{value}</p>
  </div>
);
