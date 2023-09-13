import React, { useState } from 'react';
import axios from 'axios';

const AssignmentForm = ({ assignmentData, onSubmit }) => {
  const [formData, setFormData] = useState(assignmentData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/assignments/', formData); // Replace with your Django API endpoint
      onSubmit();
    } catch (error) {
      console.error('An error occurred while submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
      </label>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AssignmentForm;
