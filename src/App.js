// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import Features from './Pages/Features/Features';
import Developer from './Pages/Developer/Developer';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Features />
      <Developer />
      <Footer />
    </div>
  );
}

export default App;
