import React, { useContext } from 'react';
import NavigationBar from './NavigationBar';
import './App.css';
import Footer from './footer';
import { ItineraryContext } from './ItineraryContext'; // Import the ItineraryContext
import StepGuide from './StepGuide';

function ItineraryPage() {
  const { itinerary } = useContext(ItineraryContext); // Access itinerary from the context

  return (
    <div className="Itinerary">
      <NavigationBar />
      <div className="main-container">
        <h1 className="page-title">My Itinerary</h1>
        <section className="itinerary-section">
        <StepGuide />
          {itinerary && itinerary.length > 0 ? (
            <ul className="itinerary-list">
              {itinerary.map((item, index) => (
                <li key={index} className="itinerary-item">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-message">Your itinerary is empty.</p>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ItineraryPage;




