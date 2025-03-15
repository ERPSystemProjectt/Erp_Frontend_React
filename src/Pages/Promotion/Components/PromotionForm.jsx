import React from 'react';

const PromotionForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Header */}
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Appraisal & Promotion
            </h1>
          </div>

          {/* Table */}
          <div className="px-6 pb-6">
            <div className="overflow-x-auto">
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Date of A/P</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Action</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Effective Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Current Designation</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Promoted Designation</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Current Salary</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Salary Hike</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Amount</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Gross Salary</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="text-center">
                      <td colSpan={9} className="px-6 py-8 text-sm text-gray-500">
                        No Data Exists
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

export default PromotionForm;
