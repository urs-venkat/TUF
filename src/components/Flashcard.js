// import React, { useState } from 'react';
// import './Flashcard.css'; // Import CSS file for styling

// const Flashcard = ({ flashcard, onNext, onPrevious }) => {
//   const [flipped, setFlipped] = useState(false);

//   const handleFlip = () => {
//     setFlipped(!flipped);
//   };

//   return (
//     <div className="flashcard">
//       <div className={`card-content ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
//         <div className="front" dangerouslySetInnerHTML={{ __html: flashcard.question }} />
//         <div className="back">
//           <p dangerouslySetInnerHTML={{ __html: flashcard.answer }} />
//           <ul>
//             {flashcard.options.map((option, index) => (
//               <li key={index} dangerouslySetInnerHTML={{ __html: option }} />
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="navigation">
//         <button onClick={onPrevious} disabled={flashcard.isFirst}>Previous</button>
//         <button onClick={onNext} disabled={flashcard.isLast}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Flashcard;

import React from 'react';
import './Flashcard.css'; // Import CSS file for styling

const Flashcard = ({ flashcard, onNext, onPrevious, isFlipped, onFlip }) => {

  return (
    <div className="flashcard">
      <div className={`card-content ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
        <div className="front">
          <p dangerouslySetInnerHTML={{ __html: flashcard.question }} />
        </div>
        <div className="back">
          <p dangerouslySetInnerHTML={{ __html: flashcard.answer }} />
          <ul>
            {flashcard.options && flashcard.options.map((option, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: option }} />
            ))}
          </ul>
        </div>
      </div>
      <div className="navigation">
        <button onClick={onPrevious} disabled={flashcard.isFirst}>Previous</button>
        <button onClick={onNext} disabled={flashcard.isLast}>Next</button>
      </div>
    </div>
  );
};

export default Flashcard;
