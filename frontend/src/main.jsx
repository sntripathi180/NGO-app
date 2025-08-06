import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../src/Context/user.context.jsx"; 
import AuthProvider from "../src/Context/AuthContext.jsx"; 

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </AuthProvider>
);
