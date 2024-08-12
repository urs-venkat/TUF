import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashcardForm from './FlashcardForm';
import FlashcardList from './FlashcardList';
import './AdminDashboard.css'; // Ensure the CSS file is correctly imported

const AdminDashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flashcards');
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

  const addFlashcard = async (newCard) => {
    try {
      const response = await axios.post('http://localhost:5000/api/flashcards', newCard);
      setFlashcards([...flashcards, response.data]);
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };

  const updateFlashcard = async (updatedCard) => {
    try {
      await axios.put(`http://localhost:5000/api/flashcards/${updatedCard.id}`, updatedCard);
      setFlashcards(flashcards.map(card => card.id === updatedCard.id ? updatedCard : card));
      setEditingCard(null);
    } catch (error) {
      console.error('Error updating flashcard:', error);
    }
  };

  const deleteFlashcard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/flashcards/${id}`);
      setFlashcards(flashcards.filter(card => card.id !== id));
    } catch (error) {
      console.error('Error deleting flashcard:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <FlashcardForm 
        addFlashcard={addFlashcard} 
        updateFlashcard={updateFlashcard} 
        editingCard={editingCard} 
        setEditingCard={setEditingCard}
      />
      <FlashcardList 
        flashcards={flashcards} 
        setEditingCard={setEditingCard} 
        deleteFlashcard={deleteFlashcard}
      />
    </div>
  );
};

export default AdminDashboard;
