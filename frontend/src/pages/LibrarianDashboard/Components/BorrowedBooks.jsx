import React, { useState, useEffect } from 'react';

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    // Fetch borrowed books from API
    // For now, we'll use dummy data
    setBorrowedBooks([
      { id: 1, bookTitle: 'Book 1', userName: 'User 1', returnDate: '2023-08-01', borrowedCount: 2 },
      { id: 2, bookTitle: 'Book 2', userName: 'User 2', returnDate: '2023-07-25', borrowedCount: 1 },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Borrowed Books</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Book Title</th>
            <th className="text-left">Borrowed By</th>
            <th className="text-left">Return Date</th>
            <th className="text-left">Books Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.map(book => (
            <tr key={book.id}>
              <td>{book.bookTitle}</td>
              <td>{book.userName}</td>
              <td>{book.returnDate}</td>
              <td>{book.borrowedCount}/3</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooks;