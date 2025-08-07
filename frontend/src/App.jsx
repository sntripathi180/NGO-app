import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import RegistrationForm from "./pages/RegistrationForm";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Task from "./pages/Task";
import Logout from "./pages/UserLogout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/volunter" element={<RegistrationForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/task" element={<Task />} />
        <Route path="/logout" element={<Logout />} />
       <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
