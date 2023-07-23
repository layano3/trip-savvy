import React from 'react';

function RecommendationCard({ title, type }) {
  return (
    <div className="recommendation-card">
      <h3>{title}</h3>
      <p>Type: {type}</p>
    </div>
  );
}

export default RecommendationCard;