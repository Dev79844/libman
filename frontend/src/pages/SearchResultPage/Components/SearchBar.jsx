import React from 'react';

const SearchBar = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Searching Books</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Odoo Development"
          className="border border-gray-300 rounded-l px-4 py-2 w-full"
          defaultValue="Odoo Development"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-r">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;