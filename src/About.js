import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import img from './images/img4.jpg'
import Footer from './footer';


const AboutPage = () => {
  return (
    <div className="AboutPage">
        <NavigationBar />
      <div className="AboutPage-container">
        <div className="AboutPage-header">
          <h1 className="AboutPage-title">About TripSavvy</h1>
        </div>
        <div className="AboutPage-content">
          <div className="AboutPage-story">
            <h2>Our Story</h2>
            <p>At TripSavvy, we believe that travel planning should be easy, inspiring, and personalized. Our journey began with a group of passionate travelers who wanted to create a platform that empowers people to explore the world and build unforgettable itineraries.</p>
            <p>Since our founding, we have been dedicated to providing comprehensive travel information, expert recommendations, and innovative tools to help travelers make the most of their trips. Whether you're a seasoned globetrotter or a first-time adventurer, TripSavvy is here to guide you every step of the way.</p>
          </div>
          <div className="AboutPage-team">
            <h2>Our Team</h2>
            <div className="AboutPage-team-members">
              <div className="AboutPage-team-member">
                <img src={img} alt="Team Member 1" />
                <h3>Sally Donte</h3>
                <p>Co-founder &amp; CEO</p>
              </div>
              <div className="AboutPage-team-member">
                <img src={img} alt="Team Member 2" />
                <h3>Jennifer heckings</h3>
                <p>Co-founder &amp; CTO</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
          <div className="AboutPage-values">
            <h2>Our Values</h2>
            <ul>
              <li>Passion for Travel</li>
              <li>Excellence in User Experience</li>
              <li>Innovation and Continuous Improvement</li>
              <li>Authenticity and Local Insights</li>
            </ul>
          </div>
          <div className="AboutPage-achievements">
            <h2>Our Achievements</h2>
            <p>Over the years, TripSavvy has received numerous accolades and recognition for its commitment to providing exceptional travel planning services. Some of our notable achievements include:</p>
            <ul>
              <li>Winner of the Travel Innovation Award</li>
              <li>Featured in Top Travel Websites by Travel Weekly</li>
              <li>Rated #1 Travel Planning Site by Travel Enthusiasts Magazine</li>
            </ul>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default AboutPage;
