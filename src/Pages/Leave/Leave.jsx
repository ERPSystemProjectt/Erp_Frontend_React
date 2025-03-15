import React from 'react'
import LeaveForm from './Components/LeaveForm'
import BaseLayout from '../../Layouts/BaseLayout'
import Heading from './Components/Heading'

const Leave = () => {
  return (
    <BaseLayout>
    <div>
      {/* heading */}
      <div>
        <Heading />
      </div>
     
      {/* content section */}
      <LeaveForm/>
    </div>
  </BaseLayout>
  )
}

export default Leave
