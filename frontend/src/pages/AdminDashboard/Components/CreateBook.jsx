import React, { useState } from 'react';

const CreateBook = () => {
  const [book, setBook] = useState({
    isbn: '', title: '', author: '', publisher: '', year: '', 
    genre: '', language: '', quantity: '', lateFees: ''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Book created:', book);
    // Reset form
    setBook({
      isbn: '', title: '', author: '', publisher: '', year: '', 
      genre: '', language: '', quantity: '', lateFees: ''
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create a Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="isbn" value={book.isbn} onChange={handleChange} placeholder="ISBN" className="w-full p-2 border rounded" />
        <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" />
        <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" className="w-full p-2 border rounded" />
        <input type="text" name="publisher" value={book.publisher} onChange={handleChange} placeholder="Publisher" className="w-full p-2 border rounded" />
        <input type="number" name="year" value={book.year} onChange={handleChange} placeholder="Year" className="w-full p-2 border rounded" />
        <input type="text" name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" className="w-full p-2 border rounded" />
        <input type="text" name="language" value={book.language} onChange={handleChange} placeholder="Language" className="w-full p-2 border rounded" />
        <input type="number" name="quantity" value={book.quantity} onChange={handleChange} placeholder="Quantity" className="w-full p-2 border rounded" />
        <input type="number" name="lateFees" value={book.lateFees} onChange={handleChange} placeholder="Late Fees per Day" className="w-full p-2 border rounded" />
        <input type="file" name="image" value={book.image} onChange={handleChange} placeholder="Image" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Book</button>
      </form>
    </div>
  );
};

export default CreateBook;