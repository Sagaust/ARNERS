import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MasterclassParticipantDetail = ({ match }) => {
  const [participant, setParticipant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/masterclass-participants/${match.params.id}/`); // Replace with your Django API endpoint
        setParticipant(response.data);
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
    <div className="masterclass-participant-detail">
      <h1>{participant.name}</h1>
      <p>Masterclass: {participant.masterclass}</p>
      {/* Add other participant details here */}
    </div>
  );
};

export default MasterclassParticipantDetail;
