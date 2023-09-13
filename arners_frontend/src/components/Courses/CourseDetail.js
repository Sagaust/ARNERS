import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseDetail = ({ match }) => {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/courses/${match.params.id}/`); 
        // Replace with your Django API endpoint
        setCourse(response.data);
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
    <div className="course-detail">
      <h1>{course.name}</h1>
      <p>Duration: {course.duration} weeks</p>
      {/* Add other course details here */}
    </div>
  );
};

export default CourseDetail;
