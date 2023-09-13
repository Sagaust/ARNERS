import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ eventData, onSubmit }) => {
  const [formData, setFormData] = useState(eventData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events/', formData); // Replace with your Django API endpoint
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
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
