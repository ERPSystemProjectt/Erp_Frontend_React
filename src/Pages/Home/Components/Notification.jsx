import React from 'react';

const Notification = () => {
    return (
        <div className="flex  min-h-screen bg-gray-100">
            <div className="bg-white shadow-md w-full max-w-lg">
                <div className="flex border-b-2 border-gray-300">
                    <button className="flex-1 text-center py-3 font-semibold text-gray-700 border-r border-gray-300 hover:bg-gray-100">
                        Upcoming Celebration
                    </button>
                    <button className="flex-1 text-center py-3 font-semibold text-gray-700 hover:bg-gray-100">
                        Notification
                    </button>
                </div>
                <div className="p-4">
                   <p className=' text-center'>No Data found</p>
                </div>
            </div>
        </div>
    );
};

export default Notification;
