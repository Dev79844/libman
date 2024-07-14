import React from 'react';

const Sidebar = ({ setActiveTask }) => {
  return (
    <div className="w-64 bg-white shadow-md h-screen">
      <ul className="py-4">
        <li 
          className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => setActiveTask('create')}
        >
          Create a Book
        </li>
        <li 
          className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => setActiveTask('manage')}
        >
          Manage Books
        </li>
        <li 
          className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => setActiveTask('borrowed')}
        >
          Borrowed Books
        </li>
        <li 
          className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => setActiveTask('latefees')}
        >
          Late Fees
        </li>
        <li 
          className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => setActiveTask('users')}
        >
          View Users
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;