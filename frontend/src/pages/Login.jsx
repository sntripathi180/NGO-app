import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("second")



   return (
    <div className="text-white flex items-center justify-between flex-col m-12 text-center">
      <h1 className="font-bold text-cyan-400 italic">Every child deserves a champion—an adult who will never give up on them.</h1>
      <form className="p-4">
        {error && <p className="text-red-500">{error}</p>}
        <h3 className="p-4">What's your email?</h3>
        <input
          type="email"
          required
          placeholder="email@example.com"
          className="border-2 border-black rounded p-2"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <h3 className="p-4">Password</h3>
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="border-2 border-black rounded p-2 "
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-300 text-center px-4 py-2  mt-4  m-auto rounded text-black block"
        >
          Login
        </button>
        <p className="pt-2">
          Not a vounteer ?{" "}
          <Link className="px-3 text-pink-300" to="/volunter">
            Join Us
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login