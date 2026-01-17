
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { CompanyJobLevels } from './CompanyJobLevels';
import { AttendanceReportHeatmap } from './AttendanceReportHeatmap';
import { EmployerAttendance } from './EmployerAttendance';
import { TaskCard } from './TaskCard';
import { PERFORMANCE_DATA, TASKS, EMPLOYEES } from '../../data';

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-10">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Hello, Arthur Sjorgen</h1>
          <p className="text-gray-400 text-lg">It's Tuesday, 4 June 2024</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-white text-gray-900 rounded-2xl text-sm font-semibold shadow-sm border border-gray-100 flex items-center hover:bg-gray-50">Create New Task</button>
          <button className="px-6 py-3 bg-white text-gray-900 rounded-2xl text-sm font-semibold shadow-sm border border-gray-100 flex items-center hover:bg-gray-50">New Tracker</button>
          <button className="px-6 py-3 bg-white text-gray-900 rounded-2xl text-sm font-semibold shadow-sm border border-gray-100 flex items-center hover:bg-gray-50">Add Payroll</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Company Performance</h3>
                <p className="text-xs text-gray-400">Company monthly analyzed performance</p>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-lg">
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={PERFORMANCE_DATA}>
                  <PolarGrid stroke="#f1f5f9" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 500 }} />
                  <Radar name="Company" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.15} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {TASKS.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-fit">
            <CompanyJobLevels />
            <AttendanceReportHeatmap />
          </div>
          <EmployerAttendance employees={EMPLOYEES} />
        </div>
      </div>
    </div>
  );
};
