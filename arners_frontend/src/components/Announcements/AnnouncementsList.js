import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnnouncementsList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/announcements/'); // Replace with your Django API endpoint
        setAnnouncements(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
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
    <div className="announcements-list">
      <h1>Announcements</h1>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index}>
            <h2>{announcement.title}</h2>
            <p>{announcement.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementsList;
