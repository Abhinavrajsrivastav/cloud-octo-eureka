// src/Pages/Profile/Profile.jsx
import React from 'react';
import { useUser } from '../../UserContext';
import Features from '../Features/Features';

const Profile = () => {
  const { user } = useUser(); // Access the user context

  // Check if the user object is not null
  if (!user) {
    return <h1>Please log in to view your profile</h1>;
  }

  return (
    <div className="profile-page">
      <h1>{user.userName}'s Profile</h1>
      <img 
        src={user.photoURL || './Logo/default-profile.png'} 
        alt={user.userName} 
        style={{ borderRadius: '50%', width: '100px', height: '100px' }} 
      />
      <h2>Features</h2>
      <Features /> {/* Display available features */}
    </div>
  );
};

export default Profile;
