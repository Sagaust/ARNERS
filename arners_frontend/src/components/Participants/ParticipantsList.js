import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParticipantsList = () => {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/participants/'); // Replace with your API endpoint
        setParticipants(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data: ', error);
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
    <div className="participants-list">
      <h1>Participants</h1>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>
            {participant.name} ({participant.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantsList;
