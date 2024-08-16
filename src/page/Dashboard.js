import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have a CSS file for styling

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav className="dashboard-nav">
          <ul>
          
            <li><Link to="/profile">Profile</Link></li>
            
          </ul>
        </nav>
      </header>
       
    </div>
  );
}
