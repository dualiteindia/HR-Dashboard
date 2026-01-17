
import React from 'react';
import { Users, UserCheck, UserX, Home, Briefcase, Layout } from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from 'recharts';
import { EMPLOYMENT_TYPE_DATA, DEPARTMENT_DATA, GENDER_DATA } from '../../data';

export const EmployeeOverview: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-10">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Employee Overview</h1>
          <p className="text-gray-400 text-lg">Complete snapshot of your workforce</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">3,982</h3>
          <p className="text-sm text-gray-400 font-medium">Total Employees</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">3,745</h3>
          <p className="text-sm text-gray-400 font-medium">Active Employees</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <UserX className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">237</h3>
          <p className="text-sm text-gray-400 font-medium">Inactive Employees</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">1,245</h3>
          <p className="text-sm text-gray-400 font-medium">Remote Workers</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Charts */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Employment Type Pie Chart */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Employment Type Distribution</h3>
                <p className="text-xs text-gray-400">Breakdown by employment type</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={EMPLOYMENT_TYPE_DATA}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {EMPLOYMENT_TYPE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {EMPLOYMENT_TYPE_DATA.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm font-bold text-gray-900">{item.name}</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{item.value.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Department Headcount Bar Chart */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Department-wise Headcount</h3>
                <p className="text-xs text-gray-400">Employee distribution across departments</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DEPARTMENT_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Gender Ratio */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Gender Ratio</h3>
                <p className="text-xs text-gray-400">Workforce gender distribution</p>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={GENDER_DATA}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {GENDER_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Location Split */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Work Location</h3>
                <p className="text-xs text-gray-400">Remote vs On-site distribution</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Home className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Remote</p>
                    <p className="text-xs text-gray-400">Work from home</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-gray-900">1,245</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">On-Site</p>
                    <p className="text-xs text-gray-400">Office location</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-gray-900">2,737</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Layout className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Hybrid</p>
                    <p className="text-xs text-gray-400">Flexible work</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-gray-900">892</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
