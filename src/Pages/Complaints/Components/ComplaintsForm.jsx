import React from 'react';
import { Plus } from 'lucide-react';

const ComplaintsForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Header with Add Button */}
          <div className="p-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              Suggestion & Complaints
            </h1>
            <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 border-b border-gray-200">
            <div className="flex gap-1">
              <button className="px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-t-lg">
                Complaints and Suggestions
              </button>
              <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-800">
                Assigned To Me
              </button>
              <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-800">
                Complaints on me
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="px-6 pb-6">
            <div className="overflow-x-auto">
              <div className="overflow-hidden rounded-lg border border-gray-200 mt-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Request Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Subject</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Description</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-center">
                      <td colSpan={6} className="px-6 py-8 text-sm text-gray-500">
                        no records found..
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsForm;
