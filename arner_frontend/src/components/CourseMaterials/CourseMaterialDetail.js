import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseMaterialDetail = ({ match }) => {
  const [material, setMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/coursematerials/${match.params.id}/`); // Replace with your Django API endpoint
        setMaterial(response.data);
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
    <div className="course-material-detail">
      <h1>{material.title}</h1>
      <p>Description: {material.description}</p>
      {/* Add other material details here */}
    </div>
  );
};

export default CourseMaterialDetail;
