import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParticipantDetail = ({ match }) => {
  const [participant, setParticipant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/participants/${match.params.id}/`); // Replace with your API endpoint
        setParticipant(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data: ', error);
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
    <div className="participant-detail">
      <h1>{participant.name}</h1>
      <p>Email: {participant.email}</p>
      {/* Add other participant fields here */}
    </div>
  );
};

export default ParticipantDetail;
