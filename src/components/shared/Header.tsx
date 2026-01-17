
import React from 'react';
import { Search, Bell, MessageSquare, LayoutDashboard } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => (
  <header className="flex items-center justify-between py-6 px-10 bg-white shadow-sm sticky top-0 z-50">
    <div className="flex items-center space-x-8">
      <div className="bg-black p-2.5 rounded-xl flex items-center justify-center">
        <LayoutDashboard className="text-white w-6 h-6" />
      </div>
      <nav className="flex items-center space-x-2 text-sm font-medium text-gray-400">
        {['Dashboard', 'Employee Overview', 'Hiring & Recruitment', 'Attendance & Leave', 'Payroll Overview', 'Compliance', 'Application Offer', 'Employee Payroll'].map((tab) => (
          <button 
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-md' : 'hover:text-black hover:bg-gray-100'}`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
    
    <div className="flex items-center space-x-4">
      <div className="relative group">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="Search Anything" 
          className="bg-gray-100 pl-10 pr-16 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-xs text-gray-400">
          ⌘ + F
        </div>
      </div>
      <button className="p-2 text-gray-400 hover:text-gray-600">
        <Bell className="w-5 h-5" />
      </button>
      <button className="p-2 text-gray-400 hover:text-gray-600 relative">
        <MessageSquare className="w-5 h-5" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      <div className="flex items-center space-x-2 border-l pl-4 border-gray-200">
        <img src="https://picsum.photos/seed/arthur/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  </header>
);
