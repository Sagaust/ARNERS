import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnnouncementDetail = ({ match }) => {
  const [announcement, setAnnouncement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/announcements/${match.params.id}/`); // Replace with your Django API endpoint
        setAnnouncement(response.data);
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
    <div className="announcement-detail">
      <h1>{announcement.title}</h1>
      <p>Content: {announcement.content}</p>
      {/* Add other announcement details here */}
    </div>
  );
};

export default AnnouncementDetail;
