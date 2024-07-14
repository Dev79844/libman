import React, { useState, useEffect } from 'react';

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from API
    // For now, we'll use dummy data
    setBooks([
      { id: 1, title: 'Book 1', author: 'Author 1' },
      { id: 2, title: 'Book 2', author: 'Author 2' },
    ]);
  }, []);

  const handleDelete = (id) => {
    // Delete book logic here
    setBooks(books.filter(book => book.id !== id));
  };

  const handleUpdate = (id) => {
    // Update book logic here
    console.log('Update book with id:', id);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Books</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Title</th>
            <th className="text-left">Author</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => handleUpdate(book.id)} className="mr-2 text-blue-500">Update</button>
                <button onClick={() => handleDelete(book.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;