import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No Router here
import Landing from './Pages/Landing/InfoSection';
import Navbar from './Pages/Navbar/Navbar';
import Features from './Pages/Features/Features';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
        <Navbar />
        <Landing />
        <Features />
        <Footer />
        </>
        }
         />
    </Routes>
  );
}

export default App;
