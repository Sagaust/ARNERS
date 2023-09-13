import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MasterclassDetail = ({ match }) => {
  const [masterclass, setMasterclass] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/masterclasses/${match.params.id}/`); // Replace with your Django API endpoint
        setMasterclass(response.data);
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
    <div className="masterclass-detail">
      <h1>{masterclass.title}</h1>
      <p>Date: {masterclass.date}</p>
      <p>Instructor: {masterclass.instructor}</p>
      {/* Add other masterclass details here */}
    </div>
  );
};

export default MasterclassDetail;
