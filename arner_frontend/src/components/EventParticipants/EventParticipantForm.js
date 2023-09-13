import React, { useState } from 'react';
import axios from 'axios';

const EventParticipantForm = ({ participantData, onSubmit }) => {
  const [formData, setFormData] = useState(participantData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/eventparticipants/', formData); // Replace with your Django API endpoint
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
        Event:
        <input type="text" name="event" value={formData.event} onChange={handleChange} />
      </label>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventParticipantForm;
