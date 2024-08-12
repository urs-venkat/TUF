// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Flashcard from './Flashcard'; // Import Flashcard component

// const FetchRandomQuestions = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/flashcards');
        
//         // No need to format the questions like before, as the structure will match what the server returns
//         const formattedQuestions = response.data.map(q => ({
//           question: q.question,
//           answer: q.answer,
//           options: [q.answer] 
//         }));
    
//         formattedQuestions[0].isFirst = true;
//         formattedQuestions[formattedQuestions.length - 1].isLast = true;
    
//         setQuestions(formattedQuestions);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };
    

//     fetchQuestions();
//   }, []);

//   const handleNext = () => {
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   if (questions.length === 0) return <div>Loading...</div>;

//   return (
//     <Flashcard
//       flashcard={questions[currentIndex]}
//       onNext={handleNext}
//       onPrevious={handlePrevious}
//     />
//   );
// };

// export default FetchRandomQuestions;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Flashcard from './Flashcard';

// const FetchRandomQuestions = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [flippedCards, setFlippedCards] = useState({});

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/flashcards');
        
//         const formattedQuestions = response.data.map(q => ({
//           id: q.id,
//           question: q.question,
//           answer: q.answer,
//           options: [q.answer], // Adjust options logic if needed
//           isFirst: false,
//           isLast: false
//         }));

//         formattedQuestions[0].isFirst = true;
//         formattedQuestions[formattedQuestions.length - 1].isLast = true;

//         setQuestions(formattedQuestions);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleNext = () => {
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleFlip = (id) => {
//     setFlippedCards(prev => ({
//       ...prev,
//       [id]: !prev[id] // Toggle flip state for this card
//     }));
//   };

//   if (questions.length === 0) return <div>Loading...</div>;

//   return (
//     <Flashcard
//       flashcard={questions[currentIndex]}
//       onNext={handleNext}
//       onPrevious={handlePrevious}
//       isFlipped={flippedCards[questions[currentIndex].id]} // Pass flip state to Flashcard
//       onFlip={() => handleFlip(questions[currentIndex].id)} // Pass flip handler
//     />
//   );
// };

// export default FetchRandomQuestions;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';

const FetchRandomQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flashcards');
        
        const formattedQuestions = response.data.map(q => ({
          id: q.id,
          question: q.question,
          answer: q.answer,
          options: [q.answer], // Adjust options logic if needed
          isFirst: false,
          isLast: false
        }));

        formattedQuestions[0].isFirst = true;
        formattedQuestions[formattedQuestions.length - 1].isLast = true;

        setQuestions(formattedQuestions);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setFlippedCards(prev => ({ ...prev, [questions[currentIndex].id]: false })); // Reset flip state
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setFlippedCards(prev => ({ ...prev, [questions[currentIndex].id]: false })); // Reset flip state
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id] // Toggle flip state for this card
    }));
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <Flashcard
      flashcard={questions[currentIndex]}
      onNext={handleNext}
      onPrevious={handlePrevious}
      isFlipped={flippedCards[questions[currentIndex].id]} // Pass flip state to Flashcard
      onFlip={() => handleFlip(questions[currentIndex].id)} // Pass flip handler
    />
  );
};

export default FetchRandomQuestions;
