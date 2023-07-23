import React from 'react';
import './App.css';

function CuisineRecommendations({ recommendations }) {
  const hardcodedRecommendations = [
    { id: 1, name: 'Pizza', description: 'Delicious Italian dish with various toppings' },
  { id: 2, name: 'Sushi', description: 'Japanese delicacy with raw fish and rice' }
  ];

  // Combine the dynamically added recommendations with the hardcoded ones
  const allRecommendations = [...recommendations, ...hardcodedRecommendations];

  return (
    <div className="CuisineRecommendations">
      {allRecommendations.map((recommendation) => (
        <div key={recommendation.id} className="recommendation-card">
          <h3 className="recommendation-name">{recommendation.name}</h3>
          <p className="recommendation-description">{recommendation.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CuisineRecommendations;

