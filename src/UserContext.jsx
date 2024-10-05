// src/UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Custom hook to access user context
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};