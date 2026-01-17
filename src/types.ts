
export interface Task {
  id: number;
  title: string;
  endIn: string;
}

export interface Employee {
  id: string;
  name: string;
  date: string;
  scheduleIn: string;
  scheduleOut: string;
  status: 'On-Time' | 'Late';
}

export interface PayrollRecord {
  id: string;
  name: string;
  level: string;
  amount: string;
  overtime: string;
  status: 'Pending' | 'Paid';
}
