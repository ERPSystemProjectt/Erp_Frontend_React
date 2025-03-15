import React from 'react'

const Salary = () => {
    return (
        <div className="flex  font-sans">
            <div className="w-full ">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                    <h1 className="text-[1.75rem] font-semibold text-gray-800 mb-6">Salary</h1>

                    <div className="flex justify-between pr-36">
                        <div className="flex gap-2 mb-4 pb-4">
                            <span className="text-gray-600 min-w-[120px]">Total Salary :</span>
                            <span className="text-gray-900 font-medium">2</span>
                        </div>

                        <div className="flex gap-2 mb-4 pb-4">
                            <span className="text-gray-600 min-w-[120px]">Tax Deducation :</span>
                            <span className="text-gray-900 font-medium">N/A</span>
                        </div>
                    </div>

                    <div className="flex justify-between pr-36">
                        <div className="flex gap-2">
                            <span className="text-gray-600 min-w-[120px]">Last Updated Date :</span>
                            <span className="text-gray-900 font-medium">N/A</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="text-gray-600 min-w-[120px]">Employee PF :</span>
                            <span className="text-gray-900 font-medium">N/A</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Salary
