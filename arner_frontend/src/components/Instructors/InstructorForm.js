import React, { useState } from 'react';
import axios from 'axios';

const InstructorForm = ({ instructorData, onSubmit }) => {
  const [formData, setFormData] = useState(instructorData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/instructors/', formData); // Replace with your Django API endpoint
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
        Specialty:
        <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} />
      </label>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default InstructorForm;
