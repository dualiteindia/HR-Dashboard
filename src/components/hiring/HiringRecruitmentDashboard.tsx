
import React from 'react';
import { Briefcase, Users, Clock, DollarSign } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line 
} from 'recharts';
import { RECRUITMENT_FUNNEL_DATA, TIME_TO_HIRE_DATA, OPEN_POSITIONS } from '../../data';

export const HiringRecruitmentDashboard: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-10">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Hiring & Recruitment</h1>
          <p className="text-gray-400 text-lg">Track growth and hiring efficiency</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">4</h3>
          <p className="text-sm text-gray-400 font-medium">Open Positions</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">450</h3>
          <p className="text-sm text-gray-400 font-medium">Candidates in Pipeline</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">18</h3>
          <p className="text-sm text-gray-400 font-medium">Avg Time-to-Hire (Days)</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">$2,450</h3>
          <p className="text-sm text-gray-400 font-medium">Avg Cost-per-Hire</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Funnel & Trends */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Recruitment Funnel */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Recruitment Funnel</h3>
                <p className="text-xs text-gray-400">Stage-wise candidate breakdown</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RECRUITMENT_FUNNEL_DATA} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis dataKey="stage" type="category" tick={{ fill: '#94a3b8', fontSize: 12 }} width={100} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="count" fill="#3b82f6" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 space-y-3">
              {RECRUITMENT_FUNNEL_DATA.map((stage, idx) => {
                const percentage = (stage.count / RECRUITMENT_FUNNEL_DATA[0].count) * 100;
                return (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-900">{stage.stage}</span>
                      <span className="text-sm font-bold text-gray-600">{stage.count} candidates</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Time-to-Hire Trend */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Time-to-Hire Trend</h3>
                <p className="text-xs text-gray-400">Average days to hire over time</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={TIME_TO_HIRE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line type="monotone" dataKey="days" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Open Positions & Metrics */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Open Positions Table */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Open Positions</h3>
                <p className="text-xs text-gray-400">Active job postings</p>
              </div>
            </div>
            <div className="space-y-4">
              {OPEN_POSITIONS.map((position, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-2xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-gray-900">{position.title}</h4>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold">
                      {position.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{position.department}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">ID: {position.id}</span>
                    <span className="text-sm font-bold text-blue-600">{position.applicants} applicants</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Key Metrics</h3>
                <p className="text-xs text-gray-400">Hiring performance indicators</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 font-bold mb-1">OFFER ACCEPTANCE RATE</p>
                <p className="text-2xl font-bold text-gray-900">62.2%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 font-bold mb-1">CONVERSION RATE</p>
                <p className="text-2xl font-bold text-gray-900">6.2%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 font-bold mb-1">TOTAL HIRED (THIS MONTH)</p>
                <p className="text-2xl font-bold text-gray-900">28</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
