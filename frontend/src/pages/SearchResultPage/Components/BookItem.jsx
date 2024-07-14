import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="flex mb-6 border-b pb-6">
      <img src={book.coverUrl} alt={book.title} className="w-32 h-40 object-cover mr-6" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-4">{book.description}</p>
        <span className={`px-3 py-1 rounded ${book.status.includes('Available') ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
          {book.status}
        </span>
      </div>
    </div>
  );
};

export default BookItem;