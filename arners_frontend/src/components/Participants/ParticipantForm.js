import React, { useState } from 'react';
import axios from 'axios';

const ParticipantForm = ({ participantData, onSubmit }) => {
  const [formData, setFormData] = useState(participantData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/participants/', formData); // Replace with your API endpoint
      onSubmit();
    } catch (error) {
      console.error('An error occurred while submitting data: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ParticipantForm;