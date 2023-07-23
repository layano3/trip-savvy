import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from './images/img1.jpg';
import img2 from './images/imgrome.jpg';
import img3 from './images/imgtokyo.jpg';
import img4 from './images/imgdubai.jpg';
import img5 from './images/imgtemple.jpg';
import img6 from './images/imgburj.JPG';
import img7 from './images/imgcampo.jpg';
import img8 from './images/imgpizzeria.jpg';
import img9 from './images/imgpark.jpg';
import img10 from './images/imglouvre.jpg';
import img11 from './images/atlimg.jpg';
import img12 from './images/jpnhtlimg.jpg';
import { ItineraryContext } from './ItineraryContext';
import StepGuide from './StepGuide';
import Footer from './footer';


function DestinationsPage() {
  const [isLocationFilterOpen, setLocationFilterOpen] = useState(false);
  const [isAttractionTypeFilterOpen, setAttractionTypeFilterOpen] = useState(false);
  const [isBudgetFilterOpen, setBudgetFilterOpen] = useState(false);
  const [isRatingFilterOpen, setRatingFilterOpen] = useState(false);
  const [isClimateFilterOpen, setClimateFilterOpen] = useState(false);

  const[selectedFilters, setSelectedFilters] = useState({
    location: ['Japan', 'UAE', 'France', 'Italy'],
    attractionType: ['Museum', 'Park', 'Historical site', 'Restaurant', 'Hotel'],
    budgetRange: ['Budget-Friendly', 'Mid-Range', 'Luxury'],
    rating: ['1-star', '2-star', '3-star'],
    climate: ['Tropical','Temperate','Arctic'],
  })
  const toggleLocationFilter = () => {
    setLocationFilterOpen(!isLocationFilterOpen);
  };

  const toggleAttractionTypeFilter = () => {
    setAttractionTypeFilterOpen(!isAttractionTypeFilterOpen);
  };

  const toggleBudgetFilter = () => {
    setBudgetFilterOpen(!isBudgetFilterOpen);
  };

  const toggleRatingFilter = () => {
    setRatingFilterOpen(!isRatingFilterOpen);
  };

  const toggleClimateFilter = () => {
    setClimateFilterOpen(!isClimateFilterOpen);
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const categoryFilters = prevFilters[category];
  
      if (categoryFilters.includes(value) && categoryFilters.length === 1) {
        updatedFilters[category] = cards.map((card) => card[category]).filter((v, i, a) => a.indexOf(v) === i);
      } else {
        updatedFilters[category] = [value]; // Replace the entire array with the selected value
      }
  
      return updatedFilters;
    });
  };

  

const [cards, setCards] = useState([
  {
    title: 'Eiffel Tower',
    text: 'Discover the rich history and cultural treasures that make Paris an unforgettable destination',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-1.',
    image: img1,
    isAdded: false,
    location: 'France',
    attractionType: 'Historical site',
    budgetRange: 'Budget-Friendly',
    rating: '3-star',
    climate: 'Temperate',
  },
  {
    title: 'Sensoji temple',
    text: 'Immerse yourself in the vibrant energy of Tokyo, the bustling metropolis where tradition meets modernity',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-2.',
    image: img5,
    isAdded: false,
    location: 'Japan',
    attractionType: 'Historical site',
    budgetRange: 'Mid-Range',
    rating: '2-star',
    climate: 'Temperate',
  },
  {
    title: 'The Colosseum',
    text: 'Step back in time and wander through the eternal city of Rome, where history comes alive at every corner',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-3.',
    image: img2,
    isAdded: false,
    location: 'Italy',
    attractionType: 'Historical site',
    budgetRange: 'Luxury',
    rating: '3-star',
    climate: 'Temperate',
  },
  {
    title: 'Burj Khalifa',
    text: 'Be captivated by its modern skyline adorned with iconic skyscrapers',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-4.',
    image: img6,
    isAdded: false,
    location: 'UAE',
    attractionType: 'Historical site',
    budgetRange: 'Luxury',
    rating: '3-star',
    climate: 'Temperate',
  },
  {
    title: 'Campo deFiori',
    text: 'For a glimpse of Roman day-to-day life, it has to be the vibrancy of Campo deFiori',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-4.',
    image: img7,
    isAdded: false,
    location: 'Italy',
    attractionType: 'Park',
    budgetRange: 'Budget-Friendly',
    rating: '2-star',
    climate: 'Tropical',
  },
  {
    title: 'Pizzeria Gino Sorbillo',
    text: 'Roll out of the 17th-century church in Naples and into this cult eatery worshiped by local pizza aficionados',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-4.',
    image: img8,
    isAdded: false,
    location: 'Italy',
    attractionType: 'Restaurant',
    budgetRange: 'Mid-Range',
    rating: '3-star',
    climate: 'Temperate',
  },
  {
    title: 'Aquaventure Waterpark',
    text: 'Experience the most thrilling, record-breaking water rides',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-4.',
    image: img9,
    isAdded: false,
    location: 'UAE',
    attractionType: 'Park',
    budgetRange: 'Mid-Range',
    rating: '3-star',
    climate: 'Tropical',
  },
  {
    title: 'Louvre Museum',
    text: 'Home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-4.',
    image: img10,
    isAdded: false,
    location: 'France',
    attractionType: 'Museum',
    budgetRange: 'Mid-Range',
    rating: '3-star',
    climate: 'Temperate',
  },
  {
    title: 'Atlantis The Palm',
    text: 'Atlantis, The Palm is a 1,544-room ocean-themed destination resort',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-4.',
    image: img11,
    isAdded: false,
    location: 'UAE',
    attractionType: 'Hotel',
    budgetRange: 'Luxury',
    rating: '3-star',
    climate: 'Tropical',
  },
  {
    title: 'Nishitetsu Resort Inn Beppu',
    text: 'This straightforward hot spring hotel in a redbrick building is 2 minutes away by foot from the observation deck of Beppu Tower',
    isExpanded: true,
    additionalInfo: 'Additional information for Card-4.',
    image: img12,
    isAdded: false,
    location: 'Japan',
    attractionType: 'Hotel',
    budgetRange: 'Budget-Friendly',
    rating: '3-star',
    climate: 'Temperate',
  },
]);

const handleCardClick = (index) => {
  setCards((prevCards) =>
    prevCards.map((card, i) => ({
      ...card,
      isExpanded: i === index ? !card.isExpanded : false,
    }))
  );
};

const itineraryItems = cards.filter((card) => card.isAdded).map((card) => card.title);
const { itinerary, addToItinerary } = useContext(ItineraryContext);

const handleAddToItinerary = (card) => {
  addToItinerary(card.title);
  setCards((prevCards) =>
    prevCards.map((prevCard) => ({
      ...prevCard,
      isAdded: prevCard.title === card.title ? true : prevCard.isAdded,
    }))
  );
};

const [searchQuery, setSearchQuery] = useState('');

const filteredCards = cards.filter((card) => {
  // Apply faceted filters
  const locationFilter =
    selectedFilters.location.length === 0 || selectedFilters.location.includes(card.location);
  const attractionTypeFilter =
    selectedFilters.attractionType.length === 0 ||
    selectedFilters.attractionType.includes(card.attractionType);
  const budgetRangeFilter =
    selectedFilters.budgetRange.length === 0 || selectedFilters.budgetRange.includes(card.budgetRange);
  const ratingFilter =
    selectedFilters.rating.length === 0 || selectedFilters.rating.includes(card.rating);
  const climateFilter =
    selectedFilters.climate.length === 0 || selectedFilters.climate.includes(card.climate);

  // Apply search query filter
  const searchFilter =
    searchQuery === '' ||
    card.title.toLowerCase().includes(searchQuery.toLowerCase());

  // Return true if the card matches all the selected filters and the search query
  return (
    locationFilter &&
    attractionTypeFilter &&
    budgetRangeFilter &&
    ratingFilter &&
    climateFilter &&
    searchFilter
  );
});


const [filteredDestinations, setFilteredDestinations] = useState([]);


const handleSearch = (query) => {
  setSearchQuery(query);
};
console.log('selectedFilters:', selectedFilters);
console.log('filteredCards:', filteredCards);

return (
  <div className="Destinations">
    <NavigationBar handleSearch={handleSearch}/>
    <div className="main-container">
        <section className="faceted-search-container" aria-labelledby="faceted-search-heading">
          <div className="faceted-search">
            <fieldset>
              <legend onClick={toggleLocationFilter} aria-expanded={isLocationFilterOpen}>
                Location
                <span className={`toggle-icon ${isLocationFilterOpen ? 'open' : ''}`}>&#9658;</span>
              </legend>
            {isLocationFilterOpen && (
              <div className="filter-options">
                <div>
                  <input id="France" name="location" type="checkbox" onChange={()=> handleFilterChange('location', 'France')}/>
                  <label htmlFor="France">France</label>
                </div>
                <div>
                  <input id="japan" name="location" type="checkbox" onChange={()=> handleFilterChange('location', 'Japan')}/>
                  <label htmlFor="japan">Japan</label>
                </div>
                <div>
                  <input id="UAE" name="location" type="checkbox" onChange={()=> handleFilterChange('location', 'UAE')}/>
                  <label htmlFor="uae">UAE</label>
                </div>
                <div>
                  <input id="Italy" name="location" type="checkbox" onChange={()=> handleFilterChange('location', 'Italy')}/>
                  <label htmlFor="italy">Italy</label>
                </div>
              </div>
            )}
          </fieldset>

          <fieldset>
              <legend onClick={toggleAttractionTypeFilter} aria-expanded={isAttractionTypeFilterOpen}>
                Attraction Type
                <span className={`toggle-icon ${isAttractionTypeFilterOpen ? 'open' : ''}`}>&#9658;</span>
              </legend>
            {isAttractionTypeFilterOpen && (
              <div className="filter-options">
                <div>
                  <input id="museum" name="attractionType" type="checkbox" onChange={()=> handleFilterChange('attractionType', 'Museum')}/>
                  <label htmlFor="museum">Museum</label>
                </div>
                <div>
                  <input id="park" name="attractionType" type="checkbox" onChange={()=> handleFilterChange('attractionType', 'Park')}/>
                  <label htmlFor="park">Park</label>
                </div>
                <div>
                  <input id="historical-site" name="attractionType" type="checkbox" onChange={()=> handleFilterChange('attractionType', 'Historical site')}/>
                  <label htmlFor="historical-site">Historical Site</label>
                </div>
                <div>
                  <input id="restaurant" name="attractionType" type="checkbox" onChange={()=> handleFilterChange('attractionType', 'Restaurant')}/>
                  <label htmlFor="restaurant">Restaurant</label>
                </div>
                <div>
                  <input id="hotel" name="attractionType" type="checkbox" onChange={()=> handleFilterChange('attractionType', 'Hotel')}/>
                  <label htmlFor="hotel">Hotel</label>
                </div>
              </div>

            )}
          </fieldset>
          <fieldset>
              <legend onClick={toggleBudgetFilter}>
                  Budget Range
                  <span className={`toggle-icon ${isBudgetFilterOpen ? 'open' : ''}`}>&#9658;</span>
              </legend>
              {isBudgetFilterOpen && (
                  <div className='filter-options'>
                  <div>
                      <input id="budget-friendly" name="budgetRange" type="checkbox" onChange={()=> handleFilterChange('budgetRange', 'Budget-Friendly')}/>
                      <label htmlFor="budget-friendly">Budget-Friendly</label>
                  </div>
                  <div>
                      <input id="mid-range" name="budgetRange" type="checkbox" onChange={()=> handleFilterChange('budgetRange', 'Mid-Range')}/>
                      <label htmlFor="mid-range">Mid-Range</label>
                  </div>
                  <div>
                      <input id="luxury" name="budgetRange" type="checkbox" onChange={()=> handleFilterChange('budgetRange', 'Luxury')}/>
                      <label htmlFor="luxury">Luxury</label>
                  </div>
                  </div>
              )}
              </fieldset>
          <fieldset>
              <legend onClick={toggleRatingFilter}>
                  Rating
                  <span className={`toggle-icon ${isRatingFilterOpen ? 'open' : ''}`}>&#9658;</span>
              </legend>
              {isRatingFilterOpen && (
                  <div className='filter-options'>
                  <div>
                      <input id="1-star" name="rating" type="checkbox" onChange={()=> handleFilterChange('rating', '1-star')}/>
                      <label htmlFor="1-star">1 Star</label>
                  </div>
                  <div>
                      <input id="2-star" name="rating" type="checkbox" onChange={()=> handleFilterChange('rating', '2-star')}/>
                      <label htmlFor="2-star">2 Stars</label>
                  </div>
                  <div>
                      <input id="3-star" name="rating" type="checkbox" onChange={()=> handleFilterChange('rating', '3-star')}/>
                      <label htmlFor="3-star">3 Stars</label>
                  </div>
                  </div>
              )}
              </fieldset>
              <fieldset>
                  <legend onClick={toggleClimateFilter}>
                      Climate
                      <span className={`toggle-icon ${isClimateFilterOpen ? 'open' : ''}`}>&#9658;</span>
                  </legend>
                  {isClimateFilterOpen && (
                      <div className='filter-options'>
                      <div>
                          <input id="tropical" name="climate" type="checkbox" onChange={()=> handleFilterChange('climate', 'Tropical')}/>
                          <label htmlFor="tropical">Tropical</label>
                      </div>
                      <div>
                          <input id="temperate" name="climate" type="checkbox" onChange={()=> handleFilterChange('climate', 'Temperate')}/>
                          <label htmlFor="temperate">Temperate</label>
                      </div>
                      <div>
                          <input id="arctic" name="climate" type="checkbox" onChange={()=> handleFilterChange('climate', 'Arctic')}/>
                          <label htmlFor="arctic">Arctic</label>
                      </div>
                      </div>
                  )}
                  </fieldset>

        </div>
      </section>

      <section className="destinations-section">
          <div className="Destinations-container">
            <h1>Destinations</h1>
            <div className="Destination-cards" role="region" aria-label="Destination Cards">
              {filteredCards.length > 0 ? (
                filteredCards.map((card, i) => (
                  <div
                    key={i}
                    className={`Destination-card ${card.isExpanded ? 'expanded' : ''}`}
                    onClick={() => handleCardClick(i)}
                    role="button"
                    tabIndex="0"
                  >
                    <img src={card.image} alt={card.title} className="Destination-card-image" />
                    <div className="Destination-card-content">
                      {card.isExpanded && (
                        <>
                          <h3>{card.title}</h3>
                          <p>{card.text}</p>
                          <div className="Destination-card-actions">
                            <button onClick={() => handleAddToItinerary(card)}>
                              {card.isAdded ? 'Remove from Itinerary' : 'Add to Itinerary'}
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                // Show all cards when there are no filtered cards
                cards.map((card, i) => (
                  <div
                    key={i}
                    className={`Destination-card ${card.isExpanded ? 'expanded' : ''}`}
                    onClick={() => handleCardClick(i)}
                  >
                    <img src={card.image} alt={card.title} className="Destination-card-image" />
                    <div className="Destination-card-content">
                      {card.isExpanded && (
                        <>
                          <h3>{card.title}</h3>
                          <p>{card.text}</p>
                          <div className="Destination-card-actions">
                            <button onClick={() => handleAddToItinerary(card)}>
                              {card.isAdded ? 'Remove from Itinerary' : 'Add to Itinerary'}
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DestinationsPage;

