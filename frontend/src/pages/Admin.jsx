import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Admin = () => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/login`, { email, password });
      console.log("resonse of admin",response)
      if (response.status === 200) {
        const { token, user } = response.data.data;
        if (user.role !== "admin") {
          setError("Access denied: Not an admin");
          return;
        }
        login(token);
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

 return (
    <div className="text-white flex items-center justify-between flex-col m-12 text-center">
      <h1 className="font-bold text-cyan-400">Admin Login</h1>
      <form  onSubmit={handleSubmit}  className="p-4">
        {error && <p className="text-red-500">{error}</p>}
        <h3 className="p-4">What's your email?</h3>
        <input
          type="email"
          required
          placeholder="email@example.com"
          className="border-2 border-black rounded p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="p-4">Password</h3>
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="border-2 border-black rounded p-2 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-300 text-center px-4 py-2  mt-4  m-auto rounded text-black block"
        >
          Login
        </button>
       
      </form>
    </div>
  );
}

export default Admin