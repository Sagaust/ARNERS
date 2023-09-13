import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch user role from the API or from local storage
    const fetchUserRole = async () => {
      try {
        const response = await axios.get('/api/user-role/'); // Replace with your API endpoint
        setUserRole(response.data.role);
      } catch (error) {
        console.error('An error occurred while fetching data: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserRole();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>

      {userRole === 'participant' && (
        <div className="participant-dashboard">
          {/* Participant-specific widgets or cards */}
          <div>Your enrolled courses</div>
          <div>Upcoming events</div>
          {/* ... */}
        </div>
      )}

      {userRole === 'instructor' && (
        <div className="instructor-dashboard">
          {/* Instructor-specific widgets or cards */}
          <div>Your courses</div>
          <div>Student performance</div>
          {/* ... */}
        </div>
      )}

      {userRole === 'admin' && (
        <div className="admin-dashboard">
          {/* Admin-specific widgets or cards */}
          <div>Total number of courses</div>
          <div>Total number of participants</div>
          {/* ... */}
        </div>
      )}

      {/* Common widgets or cards that appear for all roles */}
      <div>Your recent activities</div>
      <div>Your notifications</div>
      {/* ... */}
    </div>
  );
};

export default Dashboard;
