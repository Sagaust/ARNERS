import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizzesList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/quizzes/'); // Replace with your Django API endpoint
        setQuizzes(response.data);
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
    <div className="quizzes-list">
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>{quiz.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizzesList;
