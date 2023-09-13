import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = ({ courseData, onSubmit }) => {
  const [formData, setFormData] = useState(courseData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/courses/', formData); // Replace with your Django API endpoint
      onSubmit();
    } catch (error) {
      console.error('An error occurred while submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Duration:
        <input type="number" name="duration" value={formData.duration} onChange={handleChange} />
      </label>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;
