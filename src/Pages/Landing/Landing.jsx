// src/components/Landing/Landing.jsx
import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <div className="landing-content">
      <div className="landing-image">
        <img src="https://happytoddlerplaytime.com/wp-content/uploads/2023/05/PIC-5-1024x1024.jpeg" alt="Cloud Storage Illustration" />
      </div>
        <h1>Welcome to LearnCloud</h1>
        <p>Your personal cloud storage for all your learning materials.</p>
        <a href="#features" className="btn">Get Started</a>
      </div>
    </section>
  );
};

export default Landing;
