
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Header } from './components/shared/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { EmployeeOverview } from './components/employee-overview/EmployeeOverview';
import { HiringRecruitmentDashboard } from './components/hiring/HiringRecruitmentDashboard';
import { AttendanceLeaveManagement } from './components/attendance/AttendanceLeaveManagement';
import { PayrollOverview } from './components/payroll/PayrollOverview';
import { ComplianceTracking } from './components/compliance/ComplianceTracking';
import { ApplicationOffer } from './components/application-offer/ApplicationOffer';
import { EmployeePayroll } from './components/payroll/EmployeePayroll';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main>
        {activeTab === 'Dashboard' && <Dashboard />}
        {activeTab === 'Employee Overview' && <EmployeeOverview />}
        {activeTab === 'Hiring & Recruitment' && <HiringRecruitmentDashboard />}
        {activeTab === 'Attendance & Leave' && <AttendanceLeaveManagement />}
        {activeTab === 'Payroll Overview' && <PayrollOverview />}
        {activeTab === 'Compliance' && <ComplianceTracking />}
        {activeTab === 'Application Offer' && <ApplicationOffer />}
        {activeTab === 'Employee Payroll' && <EmployeePayroll />}
        {!['Dashboard', 'Employee Overview', 'Hiring & Recruitment', 'Attendance & Leave', 'Payroll Overview', 'Compliance', 'Application Offer', 'Employee Payroll'].includes(activeTab) && (
          <div className="flex items-center justify-center h-[60vh]">
            <p className="text-gray-400 text-xl font-medium">Coming soon: {activeTab}</p>
          </div>
        )}
      </main>

      {/* Persistent Floating Action Button */}
      <div className="fixed bottom-10 right-10 flex flex-col items-center space-y-4">
        <button 
          className="w-14 h-14 bg-black text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
          title="Add Something New"
        >
          <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        </button>
      </div>
    </div>
  );
}
