import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizDetail = ({ match }) => {
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/quizzes/${match.params.id}/`); // Replace with your Django API endpoint
        setQuiz(response.data);
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
    <div className="quiz-detail">
      <h1>{quiz.name}</h1>
      <p>Course: {quiz.course}</p>
      {/* Add other quiz details here */}
    </div>
  );
};

export default QuizDetail;
