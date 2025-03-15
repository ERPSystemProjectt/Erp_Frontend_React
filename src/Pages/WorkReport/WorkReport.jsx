import React from 'react'
import  ReportForm from './Components/ReportForm'
import BaseLayout from '../../Layouts/BaseLayout'
import Heading from './Components/Heading'

const WorkReport = () => {
  return (
    <BaseLayout>
      <div>
        {/* heading */}
        <div>
          <Heading />
        </div>
       
        {/* content section */}
        <ReportForm/>
      </div>
    </BaseLayout>
  )
}

export default WorkReport
