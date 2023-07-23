import React, { createContext, useState } from 'react';

export const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useState([]);

  const addToItinerary = (destination) => {
    setItinerary((prevItinerary) => [...prevItinerary, destination]);
  };

  const removeFromItinerary = (destination) => {
    setItinerary((prevItinerary) => prevItinerary.filter((item) => item !== destination));
  };

  return (
    <ItineraryContext.Provider value={{ itinerary, addToItinerary, removeFromItinerary }}>
      {children}
    </ItineraryContext.Provider>
  );
};

