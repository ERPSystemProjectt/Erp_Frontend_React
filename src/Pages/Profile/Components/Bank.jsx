import React from 'react'

const Bank = () => {
  return (
    <div className="flex mb-4  font-sans">
      <div className="w-full ">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h1 className="text-[1.75rem] font-semibold text-gray-800 mb-6">Bank</h1>
          
          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Account No :</span>
            <span className="text-gray-900 font-medium">EFVPP6340J</span>
          </div>

          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Bank name :</span>
            <span className="text-gray-900 font-medium">9812-7642-9259</span>
          </div>

          <div className="flex gap-2">
            <span className="text-gray-600 min-w-[120px]">IFSC Code :</span>
            <span className="text-gray-900 font-medium">N/A</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bank
