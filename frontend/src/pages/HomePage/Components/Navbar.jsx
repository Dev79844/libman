import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div
        className="flex items-center hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/book-icon.png" alt="Book Icon" className="w-8 h-8 mr-2" />
        <h1 className="text-xl font-bold">Public Library</h1>
      </div>
      <div>
        <Link to="/login" className="bg-red-500 text-white px-4 py-2 rounded">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
