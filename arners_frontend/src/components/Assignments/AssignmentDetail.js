import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssignmentDetail = ({ match }) => {
  const [assignment, setAssignment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/assignments/${match.params.id}/`); // Replace with your Django API endpoint
        setAssignment(response.data);
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
    <div className="assignment-detail">
      <h1>{assignment.title}</h1>
      <p>Content: {assignment.content}</p>
      {/* Add other assignment details here */}
    </div>
  );
};

export default AssignmentDetail;
