import React from 'react';

const SearchBar = () => {
  return (
    <div className="my-8 text-center">
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Search the books available in Library</h2>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Odoo Development"
          className="border border-gray-300 rounded-l px-4 py-2 w-96"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;