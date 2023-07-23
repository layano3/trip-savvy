import React from 'react';
import './App.css';

function HotelRecommendations({ recommendations }) {
  const hardcodedRecommendations = [
    { id: 1, name: 'Luxury Resort', description: 'Indulge in luxury and relaxation at this exquisite resort' },
  { id: 2, name: 'Cozy Bed Hotel', description: 'Experience the comfort of this lovely bed and breakfast.' },
  ];

  // Combine the dynamically added recommendations with the hardcoded ones
  const allRecommendations = [...recommendations, ...hardcodedRecommendations];

  return (
    <div className="HotelRecommendations">
      {allRecommendations.map((recommendation) => (
        <div key={recommendation.id} className="recommendation-card">
          <h3 className="recommendation-name">{recommendation.name}</h3>
          <p className="recommendation-description">{recommendation.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HotelRecommendations;