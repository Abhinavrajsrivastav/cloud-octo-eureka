import React, { useState } from 'react';
import { FcVideoCall, FcPlanner, FcComments, FcAbout } from 'react-icons/fc';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <FcVideoCall className="feature-icon" />,
      description: 'Video Call'
    },
    {
      icon: <FcPlanner className="feature-icon" />,
      description: 'Schedule a Video Call'
    },
    {
      icon: <FcComments className="feature-icon" />,
      description: 'Do Messages & Chatting'
    },
    {
      icon: <FcAbout className="feature-icon" />,
      description: 'View Chat History'
    }
  ];

  return (
    <div className="features-container">
      <ul className="features-list">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`feature-item ${activeFeature === index ? 'active' : ''}`}
            onClick={() => setActiveFeature(index)}
          >
            {feature.icon}
            <div className="feature-info">
              <div className="feature-description">
                {feature.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
