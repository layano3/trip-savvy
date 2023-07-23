import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import AttractionRecommendations from './AttractionRecommendations';
import CuisineRecommendations from './CuisineRecommendations';
import './App.css';
import Footer from './footer';
import StepGuide from './StepGuide';

function RecommendationsPage() {
  const [recommendationName, setRecommendationName] = useState('');
  const [recommendationDescription, setRecommendationDescription] = useState('');
  const [recommendationCategory, setRecommendationCategory] = useState('attraction');
  const [attractionRecommendations, setAttractionRecommendations] = useState([]);
  const [cuisineRecommendations, setCuisineRecommendations] = useState([]);

  const handleNameChange = (event) => {
    setRecommendationName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setRecommendationDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setRecommendationCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecommendation = {
      name: recommendationName,
      description: recommendationDescription,
      category: recommendationCategory,
    };

    if (recommendationCategory === 'attraction') {
      setAttractionRecommendations([...attractionRecommendations, newRecommendation]);
    } else if (recommendationCategory === 'cuisine') {
      setCuisineRecommendations([...cuisineRecommendations, newRecommendation]);
    }

    // Clear the form fields
    setRecommendationName('');
    setRecommendationDescription('');
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="RecommendationsPage">
      <NavigationBar handleSearch={handleSearch}/>
      <div className="recommendation-container">
        <h1 className="recommendation-title">Recommendations</h1>

        <section className="recommendation-section">
          <h2 className="recommendation-heading">Attraction Recommendations</h2>
          <AttractionRecommendations recommendations={attractionRecommendations} />
        </section>

        <section className="recommendation-section">
          <h2 className="recommendation-heading">Cuisine Recommendations</h2>
          <CuisineRecommendations recommendations={cuisineRecommendations} />
        </section>

        <section className="recommendation-section">
          <h2 className="recommendation-heading">Add Your Own Recommendation</h2>
          <form className="recommendation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={recommendationName} onChange={handleNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea id="description" value={recommendationDescription} onChange={handleDescriptionChange}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select id="category" value={recommendationCategory} onChange={handleCategoryChange}>
                <option value="attraction">Attraction</option>
                <option value="cuisine">Cuisine</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default RecommendationsPage;

