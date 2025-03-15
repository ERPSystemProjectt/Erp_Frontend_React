import React from 'react'

const CardComponents = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-around gap-4">
                {/* project card */}
               
                    <div className="flex-1 min-w-[200px]">
                        <div class="card bg-gradient-danger card-img-holder text-white">
                            <div class="card-body">
                                <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                                <h4 class="font-weight-normal mb-3">Number Of Projects <i class="mdi mdi-chart-line mdi-24px float-end"></i>
                                </h4>
                                <h2 class="mb-5">$ 15,0000</h2>
                            </div>
                        </div>
                   
                </div>
                {/* Card_working_days */}
              
                    <div className="flex-1  min-w-[200px]">
                        <div class="card bg-gradient-info card-img-holder text-white">
                            <div class="card-body">
                                <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                                <h4 class="font-weight-normal mb-3">Remaining Working Days <i class="mdi mdi-bookmark-outline mdi-24px float-end"></i>
                                </h4>
                                <h2 class="mb-5">45,6334</h2>
                            </div>
                        </div>
                   
                </div>
                {/* Card_weekends  */}
                <div className="flex-1  min-w-[200px]">
                   
                        <div class="card bg-gradient-success card-img-holder text-white">
                            <div class="card-body">
                                <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                                <h4 class="font-weight-normal mb-3">Remaining Weekends <i class="mdi mdi-diamond mdi-24px float-end"></i>
                                </h4>
                                <h2 class="mb-5">95,5741</h2>
                            </div>
                        </div>
                    
                </div>
                {/* Card_leaves  */}
                <div className="flex-1   min-w-[200px]">
                    
                        <div class="card bg-gradient-warning card-img-holder text-white">
                            <div class="card-body">
                                <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                                <h4 class="font-weight-normal mb-3">Entitled Leaves <i class="mdi mdi-diamond mdi-24px float-end"></i>
                                </h4>
                                <h2 class="mb-5">95,5741</h2>
                            </div>
                        </div>
                   
                </div>
            </div >
        </div >
    )
}

export default CardComponents
