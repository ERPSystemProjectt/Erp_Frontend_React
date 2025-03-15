import React from 'react'
import PromotionForm from './Components/PromotionForm'
import BaseLayout from '../../Layouts/BaseLayout'
import Heading from './Components/Heading'


const Promotion = () => {
  return (
    <BaseLayout>
    <div>
      {/* heading */}
      <div>
        <Heading />
      </div>
     
      {/* content section */}
      <PromotionForm/>
    </div>
  </BaseLayout>
  )
}

export default Promotion
