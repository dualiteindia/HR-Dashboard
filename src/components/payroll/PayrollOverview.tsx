
import React from 'react';
import { DollarSign, AlertCircle, TrendingUp, CheckCircle2 } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  Cell 
} from 'recharts';
import { SALARY_SPLIT_DATA, PAYROLL_TREND_DATA, DEDUCTIONS_DATA } from '../../data';

export const PayrollOverview: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-10">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Payroll Overview</h1>
          <p className="text-gray-400 text-lg">Financial control & compliance</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">$4.31M</h3>
          <p className="text-sm text-gray-400 font-medium">Total Monthly Payroll</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">$156K</h3>
          <p className="text-sm text-gray-400 font-medium">Pending Payouts</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">+8.2%</h3>
          <p className="text-sm text-gray-400 font-medium">Payroll Variance (MoM)</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">$784K</h3>
          <p className="text-sm text-gray-400 font-medium">Total Deductions</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Charts */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Salary Split */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Salary Distribution</h3>
                <p className="text-xs text-gray-400">Breakdown by salary components</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SALARY_SPLIT_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                    {SALARY_SPLIT_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Payroll Trend */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Payroll Cost Trend</h3>
                <p className="text-xs text-gray-400">Monthly payroll expenses</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PAYROLL_TREND_DATA}>
                  <defs>
                    <linearGradient id="colorPayroll" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => `$${(value / 1000000).toFixed(2)}M`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorPayroll)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Breakdown */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Deductions Breakdown */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Deductions</h3>
                <p className="text-xs text-gray-400">PF, ESI, Tax breakdown</p>
              </div>
            </div>
            <div className="space-y-4">
              {DEDUCTIONS_DATA.map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-gray-900">{item.name}</span>
                    <span className="text-lg font-bold text-gray-900">${(item.amount / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${(item.amount / DEDUCTIONS_DATA.reduce((sum, d) => sum + d.amount, 0)) * 100}%`,
                        backgroundColor: item.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Components */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Salary Components</h3>
                <p className="text-xs text-gray-400">Breakdown by type</p>
              </div>
            </div>
            <div className="space-y-4">
              {SALARY_SPLIT_DATA.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm font-bold text-gray-900">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-700">${(item.amount / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
