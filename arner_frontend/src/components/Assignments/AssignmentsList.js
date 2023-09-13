import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssignmentsList = () => {
  const [assignments, setAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/assignments/'); // Replace with your Django API endpoint
        setAssignments(response.data);
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
    <div className="assignments-list">
      <h1>Assignments</h1>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>{assignment.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentsList;
