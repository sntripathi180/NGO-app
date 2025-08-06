import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

 
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between py-5 mb-5 border-b border-b-gray-400 text-sm">
      <img
        className="h-12 w-12 cursor-pointer bg-blue-100 rounded"
        src={assets.logo}
        alt="logo"
      />

      <ul className="flex items-center gap-5">
        <NavLink to="/">
          <li className="py-1 text-white">Home</li>
        </NavLink>
        <NavLink to="/admin">
          <li className="py-1 text-white">Admin</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 pr-4 text-white">About Us</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="flex items-center justify-between gap-2 cursor-pointer relative group">
            <img
              className="h-10 w-10 rounded-xl"
              src={assets.profile_pic}
              alt="avatar"
            />
            <img className="w-2.5" src={assets.dropDown} alt="drop-down" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="bg-stone-100 min-w-40 rounded flex flex-col gap-4 p-4">
                <Link
                  to="/task"
                  className="hover:text-black cursor-pointer"
                >
                  Task
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-black cursor-pointer text-left"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/volunter")}
            className="bg-amber-300 text-black px-8 py-3 rounded font-medium hover:bg-amber-400 active:scale-95 active:shadow-inner transition transform duration-150 ease-in-out"
          >
            Join Us
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
