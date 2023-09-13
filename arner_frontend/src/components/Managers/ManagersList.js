import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManagersList = () => {
  const [managers, setManagers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/managers/'); // Replace with your Django API endpoint
        setManagers(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
