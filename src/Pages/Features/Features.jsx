// src/components/Features/Features.jsx
import React from 'react';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      title: 'Upload Files',
      description: 'Easily upload and store your code files, images, text documents, and more.',
      image: "https://miro.medium.com/v2/resize:fit:1024/1*lf0VvflbPF3zqV0al7bv5w.png",
    },
    {
      title: 'Manage Content',
      description: 'Organize, update, and delete your learning materials with a user-friendly interface.',
      image: "https://projectsly.com/images/blog/cloud-based-project-management-software.png?v=1670514978795773617",
    },
    {
      title: 'Access Anywhere',
      description: 'Access your materials from any device, anywhere, at any time.',
      image: "https://www.eclinicalworks.com/wp-content/uploads/2022/10/2022-move-to-cloud-graphic@2x.png.webp",
    },
  ];

  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="features-container">
        {featureList.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
