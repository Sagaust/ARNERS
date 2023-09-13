import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/instructors/'); // Replace with your Django API endpoint
        setInstructors(response.data);
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
    <div className="instructors-list">
      <h1>Instructors</h1>
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor.id}>{instructor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorsList;
