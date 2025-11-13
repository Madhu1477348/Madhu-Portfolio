import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Custom Hook
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Load from localStorage on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login Function
  const login = (name, email) => {
    const loggedUser = {
      name,
      email
    };

    setUser(loggedUser);
    localStorage.setItem("user", JSON.stringify(loggedUser));
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
