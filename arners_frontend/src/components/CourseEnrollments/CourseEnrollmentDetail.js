import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseEnrollmentDetail = ({ match }) => {
  const [enrollment, setEnrollment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/courseenrollments/${match.params.id}/`); // Replace with your Django API endpoint
        setEnrollment(response.data);
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
    <div className="course-enrollment-detail">
      <h1>{enrollment.courseName}</h1>
      <p>Participant: {enrollment.participantName}</p>
      {/* Add other enrollment details here */}
    </div>
  );
};

export default CourseEnrollmentDetail;
