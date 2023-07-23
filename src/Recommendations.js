import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import AttractionRecommendations from './AttractionRecommendations';
import CuisineRecommendations from './CuisineRecommendations';
import './App.css';
import Footer from './footer';
import StepGuide from './StepGuide';
import HotelRecommendations from './HotelRecommendations';

function RecommendationsPage() {
  const [recommendationName, setRecommendationName] = useState('');
  const [recommendationDescription, setRecommendationDescription] = useState('');
  const [recommendationCategory, setRecommendationCategory] = useState('attraction');
  const [attractionRecommendations, setAttractionRecommendations] = useState([]);
  const [cuisineRecommendations, setCuisineRecommendations] = useState([]);
  const [hotelRecommendations, setHotelRecommendations] = useState([]);
  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [categoryError, setCategoryError] = useState('');

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

    // Reset error states
    setNameError('');
    setDescriptionError('');
    setCategoryError('');

    // Validate input fields
    if (!recommendationName.trim()) {
      setNameError('Name is required');
    }

    if (!recommendationDescription.trim()) {
      setDescriptionError('Description is required');
    }

    if (recommendationCategory === '') {
      setCategoryError('Category must be selected');
    }

    // If there are no errors, proceed with adding the recommendation
    if (!nameError && !descriptionError && !categoryError) {
      // Add the recommendation
      const newRecommendation = {
        name: recommendationName,
        description: recommendationDescription,
        category: recommendationCategory,
        
      };
      if (recommendationCategory === 'attraction') {
        setAttractionRecommendations([...attractionRecommendations, newRecommendation]);
      } else if (recommendationCategory === 'cuisine') {
        setCuisineRecommendations([...cuisineRecommendations, newRecommendation]);
      }else if (recommendationCategory === 'hotel') {
        setHotelRecommendations([...hotelRecommendations, newRecommendation]);
      }
      
      // Clear the form fields
      setRecommendationName('');
      setRecommendationDescription('');
      setRecommendationCategory('attraction');
    }
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
          <h2 className="recommendation-heading">Hotel Recommendations</h2>
          <HotelRecommendations recommendations={hotelRecommendations} />
        </section>

        <section className="recommendation-section">
        <h2 className="recommendation-heading">Add Your Own Recommendation</h2>
        <form className="recommendation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={recommendationName} onChange={handleNameChange} />
            {nameError && <span className="error-message">{nameError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={recommendationDescription} onChange={handleDescriptionChange}></textarea>
            {descriptionError && <span className="error-message">{descriptionError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" value={recommendationCategory} onChange={handleCategoryChange}>
              <option value="attraction">Attraction</option>
              <option value="cuisine">Cuisine</option>
              <option value="hotel">Hotel</option>
            </select>
            {categoryError && <span className="error-message">{categoryError}</span>}
          </div>
          <button type="submit">Add to recommendations</button>
        </form>
      </section>
      </div>
      <Footer />
    </div>
  );
}

export default RecommendationsPage;

