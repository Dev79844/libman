import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/book-icon.png" alt="Book Icon" className="w-8 h-8 mr-2" />
        <h1 className="text-xl font-bold">Public Library</h1>
      </div>
      <div>
        <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;