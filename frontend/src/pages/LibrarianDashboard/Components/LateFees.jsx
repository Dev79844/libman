import React, { useState, useEffect } from 'react';

const LateFees = () => {
  const [lateFees, setLateFees] = useState([]);

  useEffect(() => {
    // Fetch late fees from API
    // For now, we'll use dummy data
    setLateFees([
      { id: 1, userName: 'User 1', bookTitle: 'Book 1', daysLate: 5, fees: 25 },
      { id: 2, userName: 'User 2', bookTitle: 'Book 2', daysLate: 2, fees: 10 },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Late Fees</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">User Name</th>
            <th className="text-left">Book Title</th>
            <th className="text-left">Days Late</th>
            <th className="text-left">Late Fees ($)</th>
          </tr>
        </thead>
        <tbody>
          {lateFees.map(fee => (
            <tr key={fee.id}>
              <td>{fee.userName}</td>
              <td>{fee.bookTitle}</td>
              <td>{fee.daysLate}</td>
              <td>${fee.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LateFees;