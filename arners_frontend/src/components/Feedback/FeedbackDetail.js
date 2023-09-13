import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackDetail = ({ match }) => {
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/feedback/${match.params.id}/`); // Replace with your Django API endpoint
        setFeedback(response.data);
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
    <div className="feedback-detail">
      <h1>{feedback.title}</h1>
      <p>Comment: {feedback.comment}</p>
      {/* Add other feedback details here */}
    </div>
  );
};

export default FeedbackDetail;
