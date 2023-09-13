import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventDetail = ({ match }) => {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/events/${match.params.id}/`); // Replace with your Django API endpoint
        setEvent(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [match.params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail">
      <h1>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      {/* Add other event details here */}
    </div>
  );
};

export default EventDetail;
