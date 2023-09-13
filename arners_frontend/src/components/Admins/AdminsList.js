import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminsList = () => {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admins/'); // Replace with your Django API endpoint
        setAdmins(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admins-list">
      <h1>Admins</h1>
      <ul>
        {admins.map((admin) => (
          <li key={admin.id}>{admin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminsList;
