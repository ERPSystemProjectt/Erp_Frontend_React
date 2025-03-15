import React from 'react'

const Personal = () => {
  return (
    <div className=" flex mb-4  font-sans">
      <div className="w-full ">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h1 className="text-[1.75rem] font-semibold text-gray-800 mb-6">Personal</h1>
          
          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Gender :</span>
            <span className="text-gray-900 font-medium">male</span>
          </div>

          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Phone :</span>
            <span className="text-gray-900 font-medium">9812-7642-9259</span>
          </div>

          <div className="flex mb-4 pb-4  gap-2">
            <span className="text-gray-600 min-w-[120px]">Whatssap :</span>
            <span className="text-gray-900 font-medium">7008472827</span>
          </div>
          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Date of Birth :</span>
            <span className="text-gray-900 font-medium">06-01-2002</span>
          </div>

          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Blood Group :</span>
            <span className="text-gray-900 font-medium">O+</span>
          </div>

          <div className="flex mb-4 pb-4 gap-2">
            <span className="text-gray-600 min-w-[120px]">father's Name :</span>
            <span className="text-gray-900 font-medium">Sudhakar Pradhan</span>
          </div>
          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Mother's Name:</span>
            <span className="text-gray-900 font-medium">Sasmita Swain</span>
          </div>

          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Email ID :</span>
            <span className="text-gray-900 font-medium">pradhandevabrata@gmail.com</span>
          </div>

          <div className="flex mb-4 pb-4 gap-2">
            <span className="text-gray-600 min-w-[120px]">Adress :</span>
            <span className="text-gray-900 font-medium">Odisha</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-600 min-w-[120px]">Current Adress :</span>
            <span className="text-gray-900 font-medium">Chandigarh</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personal
