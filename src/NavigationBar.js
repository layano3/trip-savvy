import React from 'react';
import logo from './images/logo1.png';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const NavigationBar = ({ handleSearch, itineraryItems }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/trip-savvy">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/trip-savvy/destinations">
            {language === 'en' ? 'Destinations' : 'Destinations'}
          </Link>
        </li>
        <li className="nav-item">
          {/* Pass itineraryItems as a prop to the ItineraryPage */}
          <Link to="/trip-savvy/itinerary" itineraryItems={itineraryItems}>
            {language === 'en' ? 'Itinerary' : 'Itinerary'}
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/trip-savvy/recommendations" onClick={toggleDropdown}>
            {language === 'en' ? 'Recommendations' : 'Recommendations'}
          </Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/services/service1">
                  {language === 'en' ? 'Attractions' : 'Attractions'}
                </a>
              </li>
              <li>
                <a href="/services/service2">
                  {language === 'en' ? 'Cuisines' : 'Cuisines'}
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </nav>
  );
};

export default NavigationBar;
