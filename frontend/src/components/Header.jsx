import React, { useState } from "react";
import {assets}  from "../assets/assets";
import { NavLink, useNavigate ,Link} from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true)

  return (
    <div className="flex items-center justify-between py-5 mb-5  border-b border-b-gray-400 text-sm " >
      {/* //logo */}
      <img className="h-12 w-12 cursor-pointer bg-blue-100 rounded" src={assets.logo} alt="logo" />

      <ul className=" flex items-center gap-5">
        <NavLink to="/">
          <li className="py-1 text-white">Home</li>
          <hr className="border-none outline-none h-0.5 w-3/5 bg-yellow-600 m-auto hidden"/>
        </NavLink>
        
        <NavLink to="/admin">
          <li className="py-1 text-white">Admin</li>
          <hr className="border-none outline-none h-0.5 w-3/5 bg-yellow-600 m-auto hidden "/>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 pr-4 text-white">About Us</li>
          <hr className="border-none outline-none h-0.5 w-4/5 bg-yellow-600  hidden text-center"/>
        </NavLink>
      </ul>
     <div className="flex items-center gap-4">
      {token ?
      ( <div className="flex items-center justify-between gap-2 cursor-pointer relative group">
        <img className="h-10 w-10 rounded-xl" src={assets.profile_pic} alt="avatar" />
        <img className="w-2.5" src={assets.dropDown} alt="drop-down" />
        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
        <div className="bg-stone-100 min-w-40 rounded flex flex-col gap-4 p-4">
      <Link to="/task" className="hover:text-black cursor-pointer">
        Task
      </Link>
      <Link to="/logout" className="hover:text-black cursor-pointer">
        Logout
      </Link>
    </div>
        </div>
      </div>):
      <button
      onClick={()=>navigate("/volunter")}
       className="bg-amber-300 text-black  px-8 py-3 rounded font-medium hover:bg-amber-400 active:scale-95 active:shadow-inner transition transform duration-150 ease-in-out">
        Join Us
      </button>
      }
     </div>
    </div>
  );
};

export default Header;
