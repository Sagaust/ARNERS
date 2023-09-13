import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstructorDetail = ({ match }) => {
  const [instructor, setInstructor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/instructors/${match.params.id}/`); // Replace with your Django API endpoint
        setInstructor(response.data);
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
    <div className="instructor-detail">
      <h1>{instructor.name}</h1>
      <p>Specialty: {instructor.specialty}</p>
      {/* Add other instructor details here */}
    </div>
  );
};

export default InstructorDetail;
