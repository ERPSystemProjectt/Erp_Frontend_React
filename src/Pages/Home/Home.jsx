import React from 'react'
import BaseLayout from '../../Layouts/BaseLayout'
import Heading from './Components/Heading'

import CardComponents from './Components/CardComponents'
import Profile from './Components/Profile'
import BarChart from './Components/BarChart'
import Notification from './Components/Notification'
import Barchart from '../../Utils/Barchart/Barchart'


const Home = () => {
  return (
    <BaseLayout>
      <div>
        {/* heading */}
        <div>
          <Heading />
        </div>
        {/* card */}
        <div>
          <CardComponents />
        </div>
        {/* content section */}
        <div className="flex h-full w-full mt-5 gap-4">
          {/* Left Side */}
          <div className="flex flex-[3] flex-col gap-2">
            <div className="bg-white h-auto">
              <Profile />
            </div>
            <div className="bg-white h-auto">
              <Barchart/>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-[2] flex-col">
              <Notification/>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home
