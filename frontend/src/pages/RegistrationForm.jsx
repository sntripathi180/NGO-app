import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/user.context";
import { AuthContext } from "../Context/AuthContext"; 
import axios from "axios";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  const { login } = useContext(AuthContext); 

  const submitData = async (e) => {
    e.preventDefault();
    setError("");
    const newUser = {
      fullname,
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/users/register`,
        newUser,
        { withCredentials: true }
      );

      if (response.status === 201) {
        const data = response.data.data;
        console.log("data received on registration", data);

     
        setUser(data.user);

      
        login(data.token);

       
        navigate("/task");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      console.error("Registration failed:", error);
    
    }

    
    setEmail("");
    setPassword("");
    setFullname("");
  };

  return (
    <div className="text-white flex items-center justify-between flex-col m-12 text-center">
      <h1 className="font-bold text-cyan-400 italic">No one has ever become poor by giving.</h1>
      <form className="p-4" onSubmit={submitData}>
         {error && <p className="text-red-500">{error}</p>}
        <h3 className="p-4">What's your Name</h3>
        <input
          type="text"
          required
          placeholder="Sam bahadur"
          className="border-2 border-black rounded p-2"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

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
          Join
        </button>

        <p className="pt-2">
          Already a volunteer?{" "}
          <Link className="px-3 text-pink-300 underline" to="/user-login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
