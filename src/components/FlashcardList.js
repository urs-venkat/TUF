// src/FlashcardList.js
import React from 'react';

const FlashcardList = ({ flashcards, setEditingCard, deleteFlashcard }) => {
  return (
    <div className="flashcard-list">
      <h3>Flashcards</h3>
      <ul>
        {flashcards.map((flashcard) => (
          <li key={flashcard.id}>
            <div>
              <strong>Question:</strong> {flashcard.question}
            </div>
            <div>
              <strong>Answer:</strong> {flashcard.answer}
            </div>
            <button onClick={() => setEditingCard(flashcard)}>Edit</button>
            <button onClick={() => deleteFlashcard(flashcard.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardList;
