import React from 'react';
import './App.css';

function AttractionRecommendations({ recommendations }) {
  const hardcodedRecommendations = [
    { id: 1, name: 'Great Wall of China', description: 'Massive ancient wall spanning several provinces' },
    { id: 2, name: 'Machu Picchu', description: 'Ancient Incan city atop the Andes mountains' }
  ];

  // Combine the dynamically added recommendations with the hardcoded ones
  const allRecommendations = [...recommendations, ...hardcodedRecommendations];

  return (
    <div className="AttractionRecommendations">
      {allRecommendations.map((recommendation) => (
        <div key={recommendation.id} className="recommendation-card">
          <h3 className="recommendation-name">{recommendation.name}</h3>
          <p className="recommendation-description">{recommendation.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AttractionRecommendations;


