import React from 'react';

const ProfileItem = () => {
  return (
    <div className=" flex mb-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              {/* User icon placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold">Devabrata Pradhan</h1>
            <p className="text-blue-100 mt-1">Associate Software Developer (IT)</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6">
          

          {/* Emergency Contact Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-[1.75rem] font-semibold text-gray-800 mb-6">Emergency Contact</h2>
            {/* Phone Number */}
            <div className="flex justify-between pr-36">
              <div className="flex items-center gap-3 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className=" text-[1.20rem] text-gray-500">Phone</p>
                  <p className="text-[1.10rem] font-semibold  text-gray-800">9861494838</p>
                </div>
              </div>
              {/* Relation */}
              <div className="flex items-center gap-3 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div>
                  <p className="text-[1.20rem] text-gray-500">Contact Relation</p>
                  <p className="text-[1.10rem] font-semibold  text-gray-800">Father</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
