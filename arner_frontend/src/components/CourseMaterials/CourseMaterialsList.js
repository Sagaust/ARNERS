import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseMaterialsList = () => {
  const [courseMaterials, setCourseMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/coursematerials/'); // Replace with your Django API endpoint
        setCourseMaterials(response.data);
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
    <div className="course-materials-list">
      <h1>Course Materials</h1>
      <ul>
        {courseMaterials.map((material) => (
          <li
