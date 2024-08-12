import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Add custom CSS for styling

const Dashboard = ({ refreshFlashcards }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddFlashcard = async () => {
    await axios.post('/api/flashcards', { question, answer });
    refreshFlashcards();
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
      />
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
      />
      <button onClick={handleAddFlashcard}>Add Flashcard</button>
    </div>
  );
};

export default Dashboard;
