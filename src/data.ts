
import { Task, Employee, PayrollRecord } from './types';

export const PERFORMANCE_DATA = [
  { subject: 'Diversity', A: 120, fullMark: 150 },
  { subject: 'Investment', A: 98, fullMark: 150 },
  { subject: 'Campaign', A: 86, fullMark: 150 },
  { subject: 'Sustainability', A: 99, fullMark: 150 },
  { subject: 'Workload', A: 85, fullMark: 150 },
  { subject: 'Salary', A: 65, fullMark: 150 },
  { subject: 'Satisfaction', A: 110, fullMark: 150 },
  { subject: 'Ovr. Performance', A: 130, fullMark: 150 },
];

export const CASHFLOW_DATA = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 30 },
  { name: 'May', value: 60 },
  { name: 'Jun', value: 45 },
  { name: 'Jul', value: 50 },
];

export const PAYROLL_RECORDS: PayrollRecord[] = [
  { id: 'EM-0928', name: 'Arthur Sjorgen', level: 'Employee', amount: '$12,892.92', overtime: '$67.92', status: 'Pending' },
  { id: 'EM-1342', name: 'Robert Fox', level: 'Employee', amount: '$12,892.92', overtime: '$76.54', status: 'Paid' },
  { id: 'EM-3821', name: 'Esther Howard', level: 'Employee', amount: '$12,892.92', overtime: '$99.42', status: 'Paid' },
  { id: 'EM-1829', name: 'Savannah Nguyen', level: 'Staff', amount: '$12,892.92', overtime: '$54.97', status: 'Paid' },
  { id: 'EM-2372', name: 'Albert Flores', level: 'Staff', amount: '$12,892.92', overtime: '$78.65', status: 'Pending' },
  { id: 'EM-3812', name: 'Ronald Richards', level: 'Staff', amount: '$12,892.92', overtime: '$89.81', status: 'Paid' },
  { id: 'EM-2273', name: 'Jane Cooper', level: 'Employee', amount: '$12,892.92', overtime: '$95.79', status: 'Pending' },
  { id: 'EM-1126', name: 'Courtney Henry', level: 'Employee', amount: '$12,892.92', overtime: '$66.95', status: 'Pending' },
  { id: 'EM-2312', name: 'Brooklyn Simmons', level: 'Employee', amount: '$12,892.92', overtime: '$182.93', status: 'Pending' },
  { id: 'EM-2364', name: 'Annette Black', level: 'Employee', amount: '$12,892.92', overtime: '$158.77', status: 'Pending' },
  { id: 'EM-4643', name: 'Dianne Russell', level: 'Employee', amount: '$12,892.92', overtime: '$288.93', status: 'Paid' },
  { id: 'EM-4492', name: 'Cameron Williamson', level: 'Employee', amount: '$12,892.92', overtime: '$78.82', status: 'Pending' },
  { id: 'EM-4521', name: 'Jerome Bell', level: 'Employee', amount: '$12,892.92', overtime: '$98.23', status: 'Paid' },
];

export const TASKS: Task[] = [
  { id: 1, title: 'Creating new broadcast message for new Employee', endIn: '2 Days' },
  { id: 2, title: 'Creating campain task for Digital Marketing', endIn: '6 Days' },
  { id: 3, title: 'Creating conference meet with stakeholders', endIn: '9 Days' },
  { id: 4, title: 'Move all finance files to new directory', endIn: '24 Days' },
];

export const EMPLOYEES: Employee[] = [
  { id: 'EM-4492', name: 'Bessie Cooper', date: '12 June 2024', scheduleIn: '09.30', scheduleOut: '17.00', status: 'On-Time' },
  { id: 'EM-4492', name: 'Arthur Sjorgen', date: '12 June 2024', scheduleIn: '08.55', scheduleOut: '17.00', status: 'On-Time' },
  { id: 'EM-4492', name: 'Jenny Wilson', date: '12 June 2024', scheduleIn: '08.40', scheduleOut: '17.00', status: 'On-Time' },
  { id: 'EM-4492', name: 'Kathryn Murphy', date: '12 June 2024', scheduleIn: '09.20', scheduleOut: '17.00', status: 'Late' },
  { id: 'EM-4492', name: 'Marvin McKinney', date: '12 June 2024', scheduleIn: '09.00', scheduleOut: '17.00', status: 'On-Time' },
  { id: 'EM-4492', name: 'Kristin Watson', date: '12 June 2024', scheduleIn: '10.00', scheduleOut: '17.00', status: 'Late' },
];

export const EMPLOYMENT_TYPE_DATA = [
  { name: 'Full-Time', value: 2850, color: '#3b82f6' },
  { name: 'Part-Time', value: 680, color: '#10b981' },
  { name: 'Contract', value: 452, color: '#f59e0b' },
];

export const DEPARTMENT_DATA = [
  { name: 'Engineering', count: 1240 },
  { name: 'Sales', count: 890 },
  { name: 'Marketing', count: 650 },
  { name: 'HR', count: 420 },
  { name: 'Finance', count: 380 },
  { name: 'Operations', count: 402 },
];

export const GENDER_DATA = [
  { name: 'Male', value: 2150, color: '#3b82f6' },
  { name: 'Female', value: 1832, color: '#ec4899' },
];

export const RECRUITMENT_FUNNEL_DATA = [
  { stage: 'Applied', count: 450 },
  { stage: 'Screened', count: 320 },
  { stage: 'Interview', count: 180 },
  { stage: 'Offer', count: 45 },
  { stage: 'Joined', count: 28 },
];

export const TIME_TO_HIRE_DATA = [
  { month: 'Jan', days: 18 },
  { month: 'Feb', days: 22 },
  { month: 'Mar', days: 16 },
  { month: 'Apr', days: 20 },
  { month: 'May', days: 15 },
  { month: 'Jun', days: 19 },
];

export const OPEN_POSITIONS = [
  { id: 'POS-001', title: 'Senior Frontend Developer', department: 'Engineering', applicants: 45, status: 'Active' },
  { id: 'POS-002', title: 'Product Manager', department: 'Product', applicants: 32, status: 'Active' },
  { id: 'POS-003', title: 'Sales Executive', department: 'Sales', applicants: 28, status: 'Active' },
  { id: 'POS-004', title: 'UX Designer', department: 'Design', applicants: 52, status: 'Active' },
];

export const LEAVE_TYPE_DATA = [
  { name: 'Sick Leave', count: 145, color: '#ef4444' },
  { name: 'Casual Leave', count: 320, color: '#3b82f6' },
  { name: 'Paid Leave', count: 890, color: '#10b981' },
  { name: 'Unpaid Leave', count: 45, color: '#f59e0b' },
];

export const SALARY_SPLIT_DATA = [
  { name: 'Basic', amount: 2450000, color: '#3b82f6' },
  { name: 'HRA', amount: 980000, color: '#10b981' },
  { name: 'Bonus', amount: 490000, color: '#f59e0b' },
  { name: 'Variable', amount: 392000, color: '#ec4899' },
];

export const DEDUCTIONS_DATA = [
  { name: 'PF', amount: 294000, color: '#3b82f6' },
  { name: 'ESI', amount: 98000, color: '#10b981' },
  { name: 'Tax', amount: 392000, color: '#ef4444' },
];

export const PAYROLL_TREND_DATA = [
  { month: 'Jan', amount: 3800000 },
  { month: 'Feb', amount: 3850000 },
  { month: 'Mar', amount: 3900000 },
  { month: 'Apr', amount: 3950000 },
  { month: 'May', amount: 4000000 },
  { month: 'Jun', amount: 4312000 },
];

export const COMPLIANCE_STATUS = [
  { item: 'PF Filing', status: 'Completed', dueDate: '15 Jun 2024', daysRemaining: 0 },
  { item: 'ESIC Filing', status: 'Pending', dueDate: '20 Jun 2024', daysRemaining: 8 },
  { item: 'TDS Filing', status: 'Completed', dueDate: '10 Jun 2024', daysRemaining: 0 },
  { item: 'Contract Renewals', status: 'Alert', dueDate: '25 Jun 2024', daysRemaining: 13 },
];
