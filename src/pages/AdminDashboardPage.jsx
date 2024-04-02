// AdminDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import EventList from '../events/EventList'; // Assuming you have an EventList component

const AdminDashboard = () => {
  // Assuming you have event data retrieved from a service
  const eventData = []; // Placeholder for event data

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/events">Manage Events</Link></li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Event Management</h1>
          <Link to="/admin/events/new" className="add-event-btn">Add New Event</Link>
        </div>
        <div className="event-list">
          <EventList events={eventData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
