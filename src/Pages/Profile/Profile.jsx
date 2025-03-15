import React from 'react'
import BaseLayout from '../../Layouts/BaseLayout'
import ProfileItem from './Components/ProfileItem'
import Office from './Components/Office'
import Bank from './Components/Bank'
import Salary from './Components/Salary'
import Document from './Components/Document'
import Personal from './Components/Personal'
import Vehicle from './Components/Vehicle'
import Heading from './Components/Heading'

const Profile = () => {
  return (
    <BaseLayout>
      <div>
        {/* heading */}
        <div>
          <Heading/>
        </div>

        {/* content section */}
        <div className="min-h-screen flex font-sans">
          <div className="w-full">
            <div className="bg-white rounded-xl">

              <div className="flex">
                <div className="w-1/2 p-4">
                  <ProfileItem />
                  <Office />
                  <Bank />
                  <Salary />
                  <div className="flex mt-20 gap-10 font-sans">
                    <button type="button" className="btn btn-gradient-danger p-3 btn-fw text-[1.00rem]">
                      Submit Resign
                    </button>
                    <button type="button" className="btn p-3 text-[1.00rem] ml-9 btn-gradient-danger btn-fw">
                      Request For Profile Change
                    </button>
                  </div>
                </div>
                <div className="w-1/2 pt-4 pr-4">
                  <Document />
                  <Personal />
                  <Vehicle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Profile
