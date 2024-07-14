import React from 'react';

const DashboardSearchBar = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Search Books</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Odoo Development"
          className="border border-gray-300 rounded-l px-4 py-2 w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Search</button>
      </div>
    </div>
  );
};

export default DashboardSearchBar;