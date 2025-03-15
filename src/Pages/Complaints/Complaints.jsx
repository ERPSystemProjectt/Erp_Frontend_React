import React from 'react'
import ComplaintsForm from './Components/ComplaintsForm'
import BaseLayout from '../../Layouts/BaseLayout'
import Heading from './Components/Heading'

const Complaints = () => {
  return (
    <BaseLayout>
      <div>
        {/* heading */}
        <div>
          <Heading/>
        </div>
       
        {/* content section */}
        <ComplaintsForm/>
      </div>
    </BaseLayout>
  )
}

export default Complaints
