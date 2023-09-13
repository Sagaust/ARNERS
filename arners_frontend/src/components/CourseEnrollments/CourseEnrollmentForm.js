import React, { useState } from 'react';
import axios from 'axios';

const CourseEnrollmentForm = ({ enrollmentData, onSubmit }) => {
  const [formData, setFormData] = useState(enrollmentData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/courseenrollments/', formData); // Replace with your Django API endpoint
      onSubmit();
    } catch (error) {
      console.error('An error occurred while submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course Name:
        <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} />
      </label>
      <label>
        Participant Name:
        <input type="text" name="participantName" value={formData.participantName} onChange={handleChange} />
      </label>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseEnrollmentForm;
