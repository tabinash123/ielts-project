import React, { useState } from 'react';

const MatchingHeadings = ({ question, onAnswer, onNext }) => {
  const [selectedHeadings, setSelectedHeadings] = useState({});

  const handleHeadingChange = (paragraphId, headingId) => {
    setSelectedHeadings(prev => ({ ...prev, [paragraphId]: headingId }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(question.id, selectedHeadings);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{question.instructions}</p>
      {question.paragraphs.map((paragraph, index) => (
        <div key={index}>
          <p>{paragraph}</p>
          <select 
            value={selectedHeadings[index] || ''}
            onChange={(e) => handleHeadingChange(index, e.target.value)}
          >
            <option value="">Select a heading</option>
            {question.headings.map((heading, hIndex) => (
              <option key={hIndex} value={hIndex}>{heading}</option>
            ))}
          </select>
        </div>
      ))}
      <button type="submit">Next</button>
    </form>
  );
};

export default MatchingHeadings;
