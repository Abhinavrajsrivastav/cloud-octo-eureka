// src/components/Landing/Landing.jsx
import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <div className="landing-content">
        <h1>Welcome to EduCloud</h1>
        <p>A Decentralized Cloud based solution of your all Works.</p>
        <a href="#features" className="btn">Get Started</a>
      </div>
    </section>
  );
};

export default Landing;
