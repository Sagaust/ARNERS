import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManagerDetail = ({ match }) => {
  const [manager, setManager] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/managers/${match.params.id}/`); // Replace with your Django API endpoint
        setManager(response.data);
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
    <div className="manager-detail">
      <h1>{manager.name}</h1>
      <p>Email: {manager.email}</p>
      {/* Add other manager details here */}
    </div>
  );
};

export default ManagerDetail;
