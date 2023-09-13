import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/feedback/'); // Replace with your Django API endpoint
        setFeedbacks(response.data);
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
    <div className="feedback-list">
      <h1>Feedback</h1>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>{feedback
