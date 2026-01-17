
import React from 'react';
import { CheckCircle2, Clock, AlertCircle, XCircle, FileText } from 'lucide-react';
import { COMPLIANCE_STATUS } from '../../data';

export const ComplianceTracking: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Completed':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'Pending':
        return <Clock className="w-5 h-5 text-orange-600" />;
      case 'Alert':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <XCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-600';
      case 'Pending':
        return 'bg-orange-50 text-orange-600';
      case 'Alert':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto p-10">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Compliance & Statutory</h1>
          <p className="text-gray-400 text-lg">Avoid legal & financial risk</p>
        </div>
      </div>

      {/* Status Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">2</h3>
          <p className="text-sm text-gray-400 font-medium">Completed Filings</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">1</h3>
          <p className="text-sm text-gray-400 font-medium">Pending Filings</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">1</h3>
          <p className="text-sm text-gray-400 font-medium">Alerts</p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">15</h3>
          <p className="text-sm text-gray-400 font-medium">Contracts Expiring</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Compliance Status */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Compliance Status Table */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Compliance Status</h3>
                <p className="text-xs text-gray-400">PF, ESIC, TDS filing status</p>
              </div>
            </div>
            <div className="space-y-4">
              {COMPLIANCE_STATUS.map((item, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(item.status)}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{item.item}</h4>
                        <p className="text-xs text-gray-400">Due: {item.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {item.daysRemaining > 0 && (
                        <span className="text-xs text-gray-500">{item.daysRemaining} days remaining</span>
                      )}
                      <span className={`px-4 py-2 rounded-full text-xs font-bold ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Document Expiry Alerts */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Document Expiry Alerts</h3>
                <p className="text-xs text-gray-400">Upcoming document renewals</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Employee Contract - John Doe', type: 'Contract', expiry: '25 Jun 2024', days: 13 },
                { name: 'PF Registration Certificate', type: 'Certificate', expiry: '30 Jun 2024', days: 18 },
                { name: 'ESIC Registration', type: 'Registration', expiry: '15 Jul 2024', days: 33 },
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <p className="text-sm font-bold text-gray-900">{doc.name}</p>
                    <p className="text-xs text-gray-400">{doc.type} • Expires: {doc.expiry}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    doc.days <= 15 ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {doc.days} days
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Quick Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Policy Acknowledgements */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Policy Acknowledgements</h3>
                <p className="text-xs text-gray-400">Employee policy compliance</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 font-bold mb-1">ACKNOWLEDGED</p>
                <p className="text-2xl font-bold text-emerald-600">3,745</p>
                <p className="text-xs text-gray-500 mt-1">94.1% of employees</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 font-bold mb-1">PENDING</p>
                <p className="text-2xl font-bold text-orange-600">237</p>
                <p className="text-xs text-gray-500 mt-1">5.9% of employees</p>
              </div>
            </div>
          </div>

          {/* Contract Renewals */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Contract Renewals</h3>
                <p className="text-xs text-gray-400">Upcoming renewals this month</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { count: 5, period: 'This Week' },
                { count: 8, period: 'Next Week' },
                { count: 2, period: 'This Month' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <span className="text-sm font-bold text-gray-900">{item.period}</span>
                  <span className="text-xl font-bold text-blue-600">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
