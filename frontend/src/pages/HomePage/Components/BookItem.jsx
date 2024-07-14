import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="flex mb-4">
      <img src={book.coverUrl} alt={book.title} className="w-24 h-32 object-cover mr-4" />
      <div>
        <h3 className="text-blue-600 font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author} · {book.year}</p>
        <p className="text-sm text-gray-700 mt-1">{book.description}</p>
        {book.actions && (
          <div className="mt-2">
            {book.actions.map((action, index) => (
              <button key={index} className="text-blue-500 text-sm mr-4">
                {action}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookItem;