import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
 const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Perform logout operations like removing JWT token, etc.
    navigate.push('/'); // Redirect to home page
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
