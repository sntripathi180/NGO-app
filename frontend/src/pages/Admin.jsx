import React from "react";
import { Link } from "react-router-dom";
const Admin = () => {
 return (
    <div className="text-white flex items-center justify-between flex-col m-12 text-center">
      <h1 className="font-bold text-cyan-400">Admin Login</h1>
      <form className="p-4">
       
        <h3 className="p-4">What's your email?</h3>
        <input
          type="email"
          required
          placeholder="email@example.com"
          className="border-2 border-black rounded p-2"
        />
        <h3 className="p-4">Password</h3>
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="border-2 border-black rounded p-2 "
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