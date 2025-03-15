import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import AttendancePage from '../Pages/Attendance/AttendancePage';
import WorkReport from '../Pages/WorkReport/WorkReport';
import Leave from '../Pages/Leave/Leave';
import Promotion from '../Pages/Promotion/Promotion';
import Complaints from '../Pages/Complaints/Complaints';
import Profile from '../Pages/Profile/Profile';

const Approuter = () => {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/attendance" element={<AttendancePage />} />
                 <Route path="/workreport" element={<WorkReport />} />
                 <Route path="/leave" element={<Leave />} />
                 <Route path="/promotion" element={<Promotion />} />
                 <Route path="/complaints" element={<Complaints />} />
                 <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter
