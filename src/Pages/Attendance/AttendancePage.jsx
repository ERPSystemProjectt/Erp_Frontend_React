import React from 'react'
import Attendance from './Components/Attendance'
import BaseLayout from '../../Layouts/BaseLayout'
import Heading from './Components/Heading'


const AttendancePage = () => {
  return (
    <BaseLayout>
      <div>
        {/* heading */}
        <div>
          <Heading/>
        </div>
       
        {/* content section */}
        <Attendance/>
      </div>
    </BaseLayout>
  )
}

export default AttendancePage
