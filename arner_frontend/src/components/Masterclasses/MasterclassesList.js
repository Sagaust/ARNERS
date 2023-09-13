import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MasterclassesList = () => {
  const [masterclasses, setMasterclasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/masterclasses/'); // Replace with your Django API endpoint
        setMasterclasses(response.data);
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
    <div className="masterclasses-list">
      <h1>Masterclasses</h1>
      <ul>
        {masterclasses.map((masterclass) => (
