
import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/honesty_17304136.png';
import userlogo from '../images/contact_9921248.png';
import { AuthContext } from '../AuthContext/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-blue-200 lg:p-8 p-4 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          <span className="hidden md:inline">Crowd cube</span>
        </Link>

      
        <button
          onClick={handleMenuToggle}
          className="text-2xl md:hidden focus:outline-none z-20"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

       
        <ul className="hidden md:flex space-x-6 font-semibold text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "text-blue-700 hover:bg-blue-400 font-bold hover:text-white p-2 rounded"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-campaigns"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "text-blue-700 font-bold hover:bg-blue-400 hover:text-white p-2 rounded"
              }
            >
              All Campaigns
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/add-new-campaign"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 p-2 rounded"
                      : "text-blue-700 font-bold hover:bg-blue-400 hover:text-white p-2 rounded"
                  }
                >
                  Add New Campaign
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-campaigns"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 p-2 rounded"
                      : "text-blue-700 font-bold hover:bg-blue-300 hover:text-white p-2 rounded"
                  }
                >
                  My Campaigns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-donations"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 p-2 rounded"
                      : "text-blue-700 hover:bg-blue-400 font-bold hover:text-white p-2 rounded"
                  }
                >
                  My Donations
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* User Info and Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user && user?.email ? (
            <div className="flex items-center space-x-2">
              <img src={user?.photoURL || userlogo} alt="User" className="w-10 h-10 rounded-full" />
              <span>{user.displayName || "User"}</span>
              <button
                onClick={logOut}
                className="btn bg-blue-400 text-black text-xs hover:bg-blue-700"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-blue-400 text-black text-xs hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${menuOpen ? "translate-x-0" : "-translate-x-full"
            } fixed top-0 left-0 w-3/4 h-full bg-blue-300 text-white p-10 flex flex-col space-y-6 transform transition-transform duration-300 z-10 md:hidden`}
        >
          <NavLink
            to="/"
            onClick={handleMenuToggle}
            className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold bg-blue-400 p-2 rounded"
                : "text-lg font-semibold text-black hover:text-gray-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-campaigns"
            onClick={handleMenuToggle}
            className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold bg-blue-400 p-2 rounded"
                : "text-lg font-semibold text-black hover:text-gray-500"
            }
          >
            All Campaigns
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-new-campaign"
                onClick={handleMenuToggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold  bg-blue-400 p-2 rounded"
                    : "text-lg font-semibold text-black hover:text-gray-500"
                }
              >
                Add New Campaign
              </NavLink>
              <NavLink
                to="/my-campaigns"
                onClick={handleMenuToggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold  bg-blue-400 p-2 rounded"
                    : "text-lg font-semibold text-black hover:text-gray-500"
                }
              >
                My Campaigns
              </NavLink>
              <NavLink
                to="/my-donations"
                onClick={handleMenuToggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold  bg-blue-400 p-2 rounded"
                    : "text-lg font-semibold text-black hover:text-gray-500"
                }
              >
                My Donations
              </NavLink>
              <button
                onClick={logOut}
                className="w-full mt-5 bg-gray-300 text-black p-2 rounded-md"
              >
                Log Out
              </button>
            </>
          )}
          {!user && (
            <Link
              to="/auth/login"
              onClick={handleMenuToggle}
              className="w-full bg-gray-300 text-black p-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
