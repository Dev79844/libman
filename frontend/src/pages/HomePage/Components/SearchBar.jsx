import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/searchresultpage");
  };

  return (
    <div className="my-8 text-center">
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">
        Search the books available in Library
      </h2>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Odoo Development"
          className="border border-gray-300 rounded-l px-4 py-2 w-96"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
          onClick={() => handleClick()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
