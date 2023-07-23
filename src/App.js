
import NavigationBar from './NavigationBar';
import { Card, CardGroup } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from './footer';
import { Routes, Route, Router } from "react-router-dom";
import Home from "./Home";
import Destinations from './Destinations';
import ItineraryPage from './Itinerary';
import { ItineraryProvider } from './ItineraryContext';
import RecommendationsPage from './Recommendations';
import AboutPage from './About';
import ContactPage from './Contact';
import PolicyPage from './Policy';

function App() {

  return (
      <div className="App">
        <Routes>
        <Route path="/trip-savvy" element={ <Home/> } />
        <Route path="/trip-savvy/Destinations" element={ <Destinations/> } />
        <Route path="/trip-savvy/Itinerary" element={ <ItineraryPage/> } />
        <Route path="/trip-savvy/recommendations" element={<RecommendationsPage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/policyUs" element={<PolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
