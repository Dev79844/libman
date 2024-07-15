import React from "react";

const DashboardNavbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/book-icon.png" alt="Book Icon" className="w-8 h-8 mr-2" />
        <h1 className="text-xl font-bold">Public Library</h1>
      </div>
      <div className="flex items-center">
        <div className="relative mr-4">
          <img src="/icon.png" alt="Notifications" className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Signout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
