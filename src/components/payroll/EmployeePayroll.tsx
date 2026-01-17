
import React from 'react';
import { Search, Layout, TrendingUp } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { InventoryOrderCard } from './InventoryOrderCard';
import { CASHFLOW_DATA, PAYROLL_RECORDS } from '../../data';

export const EmployeePayroll: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-10">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Hello, Arthur Sjorgen</h1>
          <p className="text-gray-400 text-lg">It's Tuesday, 4 June 2024</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-white text-gray-900 rounded-2xl text-sm font-semibold shadow-sm border border-gray-100 flex items-center hover:bg-gray-50 transition-colors">
            Add Reimbursement
          </button>
          <button className="px-6 py-3 bg-white text-gray-900 rounded-2xl text-sm font-semibold shadow-sm border border-gray-100 flex items-center hover:bg-gray-50 transition-colors">
            New Payroll
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Cashflow & Inventory */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          
          {/* Cashflow Report */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold">Cashflow Report</h3>
                <p className="text-xs text-gray-400">Monthly cash flow of your company</p>
              </div>
              <div className="flex space-x-2 bg-gray-50 p-1 rounded-xl">
                <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-bold shadow-md">This Month</button>
                <button className="px-4 py-1.5 text-gray-400 text-[10px] font-bold">Last Month</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">$53,427</h4>
                  <p className="text-[10px] text-gray-400 font-medium">Inventory Valuation</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">$53,427</h4>
                  <p className="text-[10px] text-gray-400 font-medium">Payroll Expenses</p>
                </div>
              </div>
            </div>

            <div className="h-48 w-full -mx-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CASHFLOW_DATA}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 500 }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Inventory Orders */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold">Inventory Orders</h3>
                <p className="text-xs text-gray-400">Monthly procurement of goods</p>
              </div>
              <div className="flex space-x-2 bg-gray-50 p-1 rounded-xl">
                <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-bold shadow-md">This Month</button>
                <button className="px-4 py-1.5 text-gray-400 text-[10px] font-bold">Last Month</button>
              </div>
            </div>

            <InventoryOrderCard 
              id="Inv-31982"
              title="Logitech MX Master 2"
              dept="Inv. Design & Research Division"
              price="$40.89"
              status="Delivered"
              date="24 September 2023"
              orderedBy="Cameron Williamson"
              payment="Reimbursement"
              image="https://cdn-icons-png.flaticon.com/512/2884/2884149.png"
            />

            <InventoryOrderCard 
              id="Inv-8269"
              title="DBE DJ200"
              dept="Inv. Design & Research Division"
              price="$128.7"
              status="Waiting Approval"
              date="24 September 2023"
              orderedBy="Cameron Williamson"
              payment="Reimbursement"
              image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            />
          </div>

        </div>

        {/* Right Column: Employee Monthly Payroll */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Employee Monthly Payroll</h3>
                <p className="text-sm text-gray-400">Employee monthly payroll data</p>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search Employee" 
                  className="bg-gray-50 pl-12 pr-6 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 border border-transparent"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-400 text-xs uppercase tracking-wider">
                    <th className="pb-6 font-bold">Employee ID</th>
                    <th className="pb-6 font-bold">Full Name</th>
                    <th className="pb-6 font-bold">Job Levels</th>
                    <th className="pb-6 font-bold">Monthly Payroll</th>
                    <th className="pb-6 font-bold">Overtime Paid</th>
                    <th className="pb-6 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {PAYROLL_RECORDS.map((rec, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                      <td className="py-4 text-sm font-medium text-gray-600">{rec.id}</td>
                      <td className="py-4 text-sm font-bold text-gray-900">{rec.name}</td>
                      <td className="py-4 text-sm text-gray-500 font-medium">{rec.level}</td>
                      <td className="py-4 text-sm font-bold text-blue-600">{rec.amount}</td>
                      <td className="py-4 text-sm font-bold text-gray-700">{rec.overtime}</td>
                      <td className="py-4">
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold ${
                          rec.status === 'Paid' ? 'bg-blue-50 text-blue-500' : 'bg-red-50 text-red-400'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${rec.status === 'Paid' ? 'bg-blue-500' : 'bg-red-400'}`}></span>
                          {rec.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
