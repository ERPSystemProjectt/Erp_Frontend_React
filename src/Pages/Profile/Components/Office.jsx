import React from 'react'

const Office = () => {
  return (
    <div className=" flex mb-4  font-sans">
      <div className="w-full ">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h1 className="text-[1.75rem] font-semibold text-gray-800 mb-6">Office</h1>
          
          <div className="flex gap-2 mb-4 pb-4">
            <span className="text-gray-600 min-w-[120px]">Employee Id :</span>
            <span className="text-gray-900 font-medium">66</span>
          </div>

          <div className="flex gap-2">
            <span className="text-gray-600 min-w-[120px]">Office Email:</span>
            <span className="text-gray-900 font-medium">pradhandevabrata@gmail.com</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Office
