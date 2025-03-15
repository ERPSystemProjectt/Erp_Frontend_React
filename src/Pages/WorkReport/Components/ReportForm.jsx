import React from 'react';
import { Plus } from 'lucide-react';

const ReportForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Header */}
          <div className="p-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              Daily Status Report
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-72 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="January 1, 2025 - January 31, 2025"
                />
              </div>
              <button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Report
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="px-6 pb-6">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Sr No.</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Employee Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Project Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Task Details</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Hours</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {/* Example row structure */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">1</td>
                    <td className="px-6 py-4 text-sm text-gray-900">1/17/2025</td>
                    <td className="px-6 py-4 text-sm text-gray-900">John Doe</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Project X</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="max-w-xl">
                        Task description goes here
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        In-progress
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">3:00 hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-900">---</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">2</td>
                    <td className="px-6 py-4 text-sm text-gray-900">1/17/2025</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Jane Smith</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Project Y</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="max-w-xl">
                        Another task description
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Complete
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">5:00 hrs</td>
                    <td className="px-6 py-4 text-sm text-gray-900">---</td>
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

export default ReportForm;
