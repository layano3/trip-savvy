import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Footer from './footer';

const ContactPage = () => {
  return (
    <div className="ContactPage">
        <NavigationBar />
      <div className="ContactPage-container">
        <div className="ContactPage-header">
          <h1 className="ContactPage-title">Contact Us</h1>
        </div>
        <div className="ContactPage-content">
          <p>Have a question or feedback? We'd love to hear from you!</p>
          <div className="ContactPage-form">
            <div className="ContactPage-form-row">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="ContactPage-form-row">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="ContactPage-form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <div className="ContactPage-form-row">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
