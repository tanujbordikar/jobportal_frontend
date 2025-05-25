import React, { useState, useEffect } from 'react';
import { LOGOUT } from '../constants/actionTypes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setUser(userData);
  }, [navigate]);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate('/');
    setUser(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <a href="/" className="text-white text-lg font-bold hover:text-gray-300">
            DevJobPortal
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-x-8">
          <a href="/" className="text-sm font-semibold text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">Features</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">Marketplace</a>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">Company</a>
        </div>

        {/* Login Button */}
        <div className="hidden lg:flex lg:items-center">
          {user ? (
            <button
              onClick={handleLogout}
              className="ml-6 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded hover:text-gray-300"
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="ml-6 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded hover:text-gray-300"
            >
              Login
            </a>
          )}
        </div>


        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {/* Simple hamburger icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 px-6 py-4 space-y-2">
          <a href="/" className="block text-white text-sm font-semibold hover:text-gray-300">Home</a>
          <a href="#" className="block text-white text-sm font-semibold hover:text-gray-300">Features</a>
          <a href="#" className="block text-white text-sm font-semibold hover:text-gray-300">Marketplace</a>
          <a href="#" className="block text-white text-sm font-semibold hover:text-gray-300">Company</a>
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="block w-full mt-4 bg-green-500 hover:bg-green-600 text-white text-center text-sm font-semibold py-2 px-4 rounded"
            >
              Login
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
