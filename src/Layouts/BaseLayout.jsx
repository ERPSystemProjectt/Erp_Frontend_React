import React, { useState } from 'react'
import './LayOut.css'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header';


const BaseLayout = ({ children }) => {
    return (
        <div className="baselayout-container light-bg-H ">
            <div className="sidebar-main light-bg-L">
                <Sidebar  />
            </div>
            <div className="header-dasboard main_container" style={{ width: "100%" }}>
                <Header />
                <div className="dashboard bg-admin">
                    <div className="container-fluid main_container">
                        <div className="row ">
                            <div className="col-lg-12 col-sm-12">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseLayout
