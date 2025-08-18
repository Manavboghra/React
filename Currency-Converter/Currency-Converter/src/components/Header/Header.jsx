import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <div className="text-2xl font-bold text-blue-400">CurrencyApp</div>
        </  Link>
        <div className="flex items-center space-x-6">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              }   hover:text-blue-400 transition-colors`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/CurrencyConverter"}
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              }   hover:text-blue-400 transition-colors`
            }
          >
            CurrencyConverter
          </NavLink>
          <NavLink
            to={"/Denominator"}
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              }   hover:text-blue-400 transition-colors`
            }
          >
            Denominator
          </NavLink>
          <NavLink
            to={"/Reverse"}
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              }   hover:text-blue-400 transition-colors`
            }
          >
            Reverse
          </NavLink> 
           <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              }   hover:text-blue-400 transition-colors`
            }
          >
            products
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
