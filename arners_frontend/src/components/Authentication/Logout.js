import React from 'react';
import { useNavigate } from 'react-router-dom';  // Change from useHistory to useNavigate

const Logout = () => {
 const navigate = useNavigate(); // Change from history to navigate

  const handleLogout = () => {
    // TODO: Perform logout operations like removing JWT token, etc.
   navigate('/login');// Change from history.push to navigate
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
