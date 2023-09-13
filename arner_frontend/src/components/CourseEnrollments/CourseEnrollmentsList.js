import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseEnrollmentsList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/courseenrollments/'); // Replace with your Django API endpoint
        setEnrollments(response.data);
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
    <div className="course-enrollments-list">
      <h1>Course Enrollments</h1>
      <ul>
        {enrollments.map((enrollment) => (
          <li key={enrollment.id}>{enrollment.courseName} - {enrollment.part
