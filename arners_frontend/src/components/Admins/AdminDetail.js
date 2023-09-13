import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDetail = ({ match }) => {
  const [admin, setAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/admins/${match.params.id}/`); // Replace with your Django API endpoint
        setAdmin(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [match.params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-detail">
      <h1>{admin.name}</h1>
      <p>Email: {admin.email}</p>
      {/* Add other admin details here */}
    </div>
  );
};

export default AdminDetail;
