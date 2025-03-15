import React from 'react'

const Profile = () => {
    return (
        <div>
            <div className="bg-white p-6 w-full max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        {/* Avatar */}
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            
                        </div>
                        {/* Text */}
                        <div className="ml-4">
                            <h2 className="text-xl font-bold">Devabrata Pradhan</h2>
                            <p className="text-sm text-gray-500">
                                Hello, Attendance Marked at: <span className="font-bold text-gray-700">02:23 am</span>
                            </p>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800">
                        Submit DSR
                    </button>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col items-center border rounded-lg p-4">
                        <h3 className="text-2xl font-bold text-gray-800">05</h3>
                        <div className="flex items-center mt-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <p className="text-sm text-gray-600">Leave</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center border rounded-lg p-4">
                        <h3 className="text-2xl font-bold text-gray-800">08</h3>
                        <div className="flex items-center mt-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <p className="text-sm text-gray-600">Half Day</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center border rounded-lg p-4">
                        <h3 className="text-2xl font-bold text-gray-800">02</h3>
                        <div className="flex items-center mt-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                            <p className="text-sm text-gray-600">Short Leave</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center border rounded-lg p-4">
                        <h3 className="text-2xl font-bold text-gray-800">06</h3>
                        <div className="flex items-center mt-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <p className="text-sm text-gray-600">Absent</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
