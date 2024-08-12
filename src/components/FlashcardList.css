import React, { useState, useEffect } from 'react';

const FlashcardForm = ({ addFlashcard, updateFlashcard, editingCard, setEditingCard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (editingCard) {
      setQuestion(editingCard.question);
      setAnswer(editingCard.answer);
    } else {
      setQuestion('');
      setAnswer('');
    }
  }, [editingCard]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const flashcard = { question, answer };
    if (editingCard) {
      updateFlashcard({ ...flashcard, id: editingCard.id });
    } else {
      addFlashcard(flashcard);
    }
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="flashcard-form">
      <h3>{editingCard ? 'Edit Flashcard' : 'Add Flashcard'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>
        <button type="submit">{editingCard ? 'Update' : 'Add'} Flashcard</button>
        {editingCard && <button type="button" onClick={() => setEditingCard(null)}>Cancel</button>}
      </form>
    </div>
  );
};

export default FlashcardForm;
