
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Employee } from '../../types';

interface EmployerAttendanceProps {
  employees: Employee[];
}

export const EmployerAttendance: React.FC<EmployerAttendanceProps> = ({ employees }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm mt-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold">Employer Attendance</h3>
          <p className="text-sm text-gray-400">Employee arrival details on this day</p>
        </div>
        <div className="flex space-x-2 bg-gray-50 p-1 rounded-xl">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-md">Late Attendance</button>
          <button className="px-6 py-2 text-gray-400 text-sm font-medium">Day-Off Request</button>
          <button className="px-6 py-2 text-gray-400 text-sm font-medium">Time Tracker</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-50 pb-4">
              <th className="font-medium py-4">Employee ID</th>
              <th className="font-medium py-4">Full Name</th>
              <th className="font-medium py-4">Date</th>
              <th className="font-medium py-4">Schedule In</th>
              <th className="font-medium py-4">Schedule Out</th>
              <th className="font-medium py-4">Status</th>
              <th className="font-medium py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {employees.map((emp, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 text-sm font-medium text-gray-700">{emp.id}</td>
                <td className="py-4 text-sm font-semibold text-gray-900">{emp.name}</td>
                <td className="py-4 text-sm text-gray-600">{emp.date}</td>
                <td className="py-4 text-sm text-gray-900 font-medium">{emp.scheduleIn}</td>
                <td className="py-4 text-sm text-gray-600">{emp.scheduleOut}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                    emp.status === 'On-Time' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-400'
                  }`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${emp.status === 'On-Time' ? 'bg-blue-500' : 'bg-red-400'}`}></span>
                    {emp.status}
                  </span>
                </td>
                <td className="py-4">
                  <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-blue-600 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
