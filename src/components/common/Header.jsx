import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-white shadow md:shadow-lg p-5 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-2" /> {/* Logo */}
        <span className="text-gray-800 font-bold">Your Brand</span>
      </Link>
      <nav>
        <ul className="flex justify-center list-none m-0 p-0">
          <li className="mx-1 text-4E8397">
            <Link to="/" className="text-gray-800 font-bold transition-colors duration-300 hover:text-BA814F">Home</Link>
          </li>
          <li className="mx-1 text-4E8397">
            <Link to="/events" className="text-gray-800 font-bold transition-colors duration-300 hover:text-BA814F">Events</Link>
          </li>
          <li className="mx-1 text-4E8397">
            <Link to="/cart" className="text-gray-800 font-bold transition-colors duration-300 hover:text-BA814F">Cart</Link>
          </li>
          <li className="mx-1 text-4E8397">
            <Link to="/login" className="text-gray-800 font-bold transition-colors duration-300 hover:text-BA814F">Login</Link>
          </li>
          <li className="mx-1 text-4E8397">
            <Link to="/register" className="text-gray-800 font-bold transition-colors duration-300 hover:text-BA814F">Register</Link>
          </li>
          <li className="mx-1 text-4E8397">
            <Link to="/admin/dashboard" className="text-gray-800 font-bold transition-colors duration-300 hover:text-BA814F">Admin Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <Link to="/login" className="text-BA814F font-bold mr-5">Sign In</Link>
        <Link to="/cart" className="text-BA814F font-bold">Cart</Link>
      </div>
    </header>
  );
};
export default Header;