
import React from 'react';

interface InventoryOrderCardProps { 
  id: string; 
  title: string; 
  dept: string; 
  price: string; 
  status: 'Delivered' | 'Waiting Approval';
  date: string;
  orderedBy: string;
  payment: string;
  image: string;
}

export const InventoryOrderCard: React.FC<InventoryOrderCardProps> = ({ id, title, dept, price, status, date, orderedBy, payment, image }) => (
  <div className="p-6 bg-white rounded-[32px] border border-gray-50 mb-4 hover:shadow-lg transition-all w-full">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
          <img src={image} alt="" className="w-10 h-10 object-contain" />
        </div>
        <div>
          <p className="text-xs text-gray-400 font-medium mb-1">Order ID <span className="text-gray-800 font-bold">{id}</span></p>
          <h4 className="font-bold text-gray-900">{title}</h4>
          <p className="text-[10px] text-gray-400">{dept}</p>
        </div>
      </div>
      <div className="text-right">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold mb-2 ${
          status === 'Delivered' ? 'bg-emerald-50 text-emerald-500' : 'bg-orange-50 text-orange-400'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${status === 'Delivered' ? 'bg-emerald-500' : 'bg-orange-400'}`}></span>
          {status}
        </span>
        <p className="text-xl font-bold text-gray-900">{price}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-50">
      <div>
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Order Date</p>
        <p className="text-xs font-semibold text-gray-800">{date}</p>
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Ordered By</p>
        <p className="text-xs font-semibold text-gray-800">{orderedBy}</p>
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Payment Type</p>
        <p className="text-xs font-semibold text-gray-800">{payment}</p>
      </div>
    </div>
  </div>
);
