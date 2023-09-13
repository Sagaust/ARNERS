import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/courses/'); // Replace with your Django API endpoint
        setCourses(response.data);
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
    <div className="courses-list">
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} ({course.duration} weeks)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
