import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Footer from './footer';

const PolicyPage = () => {
  return (
    <div className="PolicyPage">
        <NavigationBar />
      <div className="PolicyPage-container">
        <div className="PolicyPage-header">
          <h1 className="PolicyPage-title">Privacy Policy</h1>
        </div>
        <div className="PolicyPage-content">
          <h2>Information We Collect</h2>
          <p>We collect personal information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.</p>
          <h2>How We Use Your Information</h2>
          <p>The information we collect from you may be used to personalize your experience, improve our website, process transactions, send periodic emails, and more.</p>
          <h2>Sharing of Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.</p>
          <h2>Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
          <h2>Changes to This Policy</h2>
          <p>Any changes to our Privacy Policy will be posted on this page.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyPage;
