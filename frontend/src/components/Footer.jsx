import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();
  
   
    const handleLogout = () => {
      logout();
      navigate("/");
    };
  return (
   <div className="flex items-center justify-between py-5 mb-5  border-t border-t-gray-400 text-sm text-white" >
      <ul className=" flex items-center gap-25">
      <div>
        <h3 className="text-white">Contacts</h3>
        <hr/>
        <p>abcd@gmail.com <br/> +91 49492382393
        <br/>

        </p>
      </div>
       
        <div>
        <h3 className="text-white">Office</h3>
        <hr />
        <p>NOIDA <br/> Ghaziabad
        <br/>

        </p>
      </div>
        
        <NavLink to="/about">
          <li className="py-1 pr-4 text-white">About Us</li>
          <hr className="border-none outline-none h-0.5 w-4/5 bg-yellow-600  hidden text-center"/>
        </NavLink>
      </ul>
     <div className="flex items-center gap-4">
      {isAuthenticated ?
       <>
      </>:
      <button
      onClick={()=>navigate("/volunter")}
       className="bg-amber-300 text-black  px-8 py-3 rounded font-medium hover:bg-amber-400 active:scale-95 active:shadow-inner transition transform duration-150 ease-in-out">
        Join Us
      </button>
      }
     </div>
    </div>
  )
}

export default Footer