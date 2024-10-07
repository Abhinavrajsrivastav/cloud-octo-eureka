// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import { UserProvider } from './UserContext'; // Import the provider
import Profile from './Pages/Profile/Profile'; // Assuming you created Profile page
import Features from './Pages/Features/Features'; // Assuming you created Features page
import Landing from './Pages/Landing/InfoSection';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
        {/* <Features /> */}
      </Router>
    </UserProvider>
  );
}

export default App;
