// src/pages/Profile/Features.jsx
import React from 'react';
import { FcVideoCall, FcPlanner, FcComments, FcAbout } from 'react-icons/fc';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h3 className="features-title">Amazing Features</h3>
      <ul className="features-list">
        <li className="feature-item">
          <FcVideoCall className="feature-icon" />
          <div className="feature-info">
            <h4>Start a Video Call</h4>
            <p>Connect with your friends and colleagues through high-quality video calls.</p>
          </div>
        </li>
        <li className="feature-item">
          <FcPlanner className="feature-icon" />
          <div className="feature-info">
            <h4>Schedule a Video Call</h4>
            <p>Plan your meetings in advance and never miss an important discussion.</p>
          </div>
        </li>
        <li className="feature-item">
          <FcComments className="feature-icon" />
          <div className="feature-info">
            <h4>Do Messages & Chatting</h4>
            <p>Instantly chat with your contacts and share messages seamlessly.</p>
          </div>
        </li>
        <li className="feature-item">
          <FcAbout className="feature-icon" />
          <div className="feature-info">
            <h4>View Chat History</h4>
            <p>Keep track of all your conversations and never lose important information.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Features;
