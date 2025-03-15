import React from 'react';
import { Plus } from 'lucide-react';


const LeaveForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Header */}
          <div className="p-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              Leave Status
            </h1>
            <button className="flex items-center gap-2 bg-blue-500 py-3 px-4 hover:bg-blue-800 text-white rounded-md">
              <Plus className="h-4 w-4" />
              Apply Leave
            </button>
          </div>

          {/* Table */}
          <div className="px-6 pb-6">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Leave Apply</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Reason/Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Leave Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Date From</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Date To</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600">27-12-2024, 12:54 pm</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Testing purpose</td>
                    <td className="px-6 py-4 text-sm text-gray-600">SL</td>
                    <td className="px-6 py-4 text-sm text-gray-600">27-12-2024</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Morning</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;
