import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="/profile" className="nav-link">
              <div className="nav-profile-image">
                <img src="assets/images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">David Grey. H</span>
                <span className="text-secondary text-small">Project Manager</span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/attendance">
              <span className="menu-title">Attendance</span>
              <i className="mdi mdi-contacts menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/workreport">
              <span className="menu-title">Daily Work Report</span>
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/leave">
              <span className="menu-title">Leave</span>
              <i className="mdi mdi-chart-bar menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/promotion">
              <span className="menu-title">Apprisal / Promotion</span>
              <i className="mdi mdi-table-large menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/complaints">
              <span className="menu-title">Suggestion/Complaints</span>
              <i className="mdi mdi-lock menu-icon"></i>
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
