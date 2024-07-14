import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="flex items-center mb-4">
        <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.company}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{user.address}</p>
        <p className="text-gray-700">{user.phone}</p>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <button className="text-blue-500">Edit information</button>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">Your contact</h3>
      <p className="text-gray-700">{user.contact.name}</p>
      <p className="text-gray-700">{user.contact.email}</p>
      <p className="text-gray-700">{user.contact.phone}</p>
      <p className="text-gray-700">{user.contact.location}</p>
    </div>
  );
};

export default UserProfile;