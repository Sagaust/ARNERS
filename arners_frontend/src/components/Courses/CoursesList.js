import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/courses/list/'); // Replace with your Django API endpoint
        
        // Ensure the data is an array before setting the state
        setCourses(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
        setError('Failed to fetch courses. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="courses-list">
      <h1>Courses</h1>
      <ul>
        {Array.isArray(courses) && courses.map((course) => (
          <li key={course.id}>
            {course.name} ({course.duration} weeks)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
