import React, { useState, createContext, useEffect } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");


  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

 
  useEffect(() => {
    const syncAuth = () => {
      setToken(localStorage.getItem("token") || "");
    };
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);


  const isAuthenticated = !!token;


  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

 
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
