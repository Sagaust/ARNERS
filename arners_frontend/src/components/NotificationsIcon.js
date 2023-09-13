import React, { useState } from 'react';

const NotificationsIcon = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications] = useState([
    'New course added: React Basics',
    'Event tomorrow: Docker Workshop',
    'Assignment due: JavaScript Functions'
    // Add more notifications here
  ]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="notifications-icon">
      <button onClick={toggleDropdown}>
        <i className="fas fa-bell"></i>
      </button>
      {showDropdown && (
        <div className="notifications-dropdown">
          <ul>
            {notifications.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationsIcon;
