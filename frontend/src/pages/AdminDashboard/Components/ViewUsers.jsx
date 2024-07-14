import React, { useState, useEffect } from 'react';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from API
    // For now, we'll use dummy data
    setUsers([
      { id: 1, name: 'User 1', email: 'user1@example.com', mobile: '1234567890' },
      { id: 2, name: 'User 2', email: 'user2@example.com', mobile: '0987654321' },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">View Users</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;