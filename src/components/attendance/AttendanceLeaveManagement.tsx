
import React from 'react';
import { UserCheck, UserX, Calendar, Clock, Home, Briefcase, Layout } from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { LEAVE_TYPE_DATA, EMPLOYEES } from '../../data';

export const AttendanceLeaveManagement: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-10">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Attendance & Leave</h1>
          <p className="text-gray-400 text-lg">Day-to-day workforce discipline</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">3,245</h3>
          <p className="text-sm text-gray-400 font-medium">Present Today</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <UserX className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">487</h3>
          <p className="text-sm text-gray-400 font-medium">Absent Today</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">250</h3>
          <p className="text-sm text-gray-400 font-medium">On Leave Today</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">89</h3>
          <p className="text-sm text-gray-400 font-medium">Late Check-ins</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Charts */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Leave Type Distribution */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Leave Type Distribution</h3>
                <p className="text-xs text-gray-400">Breakdown by leave type</p>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={LEAVE_TYPE_DATA}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {LEAVE_TYPE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Enhanced Attendance Table */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Today's Attendance</h3>
                <p className="text-xs text-gray-400">Real-time attendance tracking</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-400 text-xs uppercase tracking-wider">
                    <th className="pb-4 font-bold">Employee</th>
                    <th className="pb-4 font-bold">Status</th>
                    <th className="pb-4 font-bold">Check-in</th>
                    <th className="pb-4 font-bold">Location</th>
                    <th className="pb-4 font-bold">Leave Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {EMPLOYEES.map((emp, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <img src={`https://i.pravatar.cc/150?u=${emp.name}`} alt="" className="w-8 h-8 rounded-full" />
                          <span className="text-sm font-bold text-gray-900">{emp.name}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          emp.status === 'On-Time' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-400'
                        }`}>
                          {emp.status === 'On-Time' ? 'Present' : 'Late'}
                        </span>
                      </td>
                      <td className="py-4 text-sm font-medium text-gray-900">{emp.scheduleIn}</td>
                      <td className="py-4">
                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-bold">
                          {idx % 3 === 0 ? 'WFH' : idx % 3 === 1 ? 'Office' : 'Hybrid'}
                        </span>
                      </td>
                      <td className="py-4 text-sm font-bold text-gray-700">
                        {12 - (idx % 5)} days
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Work-from-Home Count */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Work Location Today</h3>
                <p className="text-xs text-gray-400">Current work arrangement</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <Home className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-gray-900">Work from Home</span>
                </div>
                <p className="text-xl font-bold text-gray-900">1,245</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-gray-900">Office</span>
                </div>
                <p className="text-xl font-bold text-gray-900">1,513</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <Layout className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-bold text-gray-900">Hybrid</span>
                </div>
                <p className="text-xl font-bold text-gray-900">487</p>
              </div>
            </div>
          </div>

          {/* Leave Balance Stats */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Leave Balance</h3>
                <p className="text-xs text-gray-400">Average & outliers</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 font-bold mb-1">AVERAGE LEAVE BALANCE</p>
                <p className="text-2xl font-bold text-gray-900">12.5 days</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 font-bold mb-1">LOWEST BALANCE</p>
                <p className="text-2xl font-bold text-red-600">2 days</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 font-bold mb-1">HIGHEST BALANCE</p>
                <p className="text-2xl font-bold text-emerald-600">28 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
