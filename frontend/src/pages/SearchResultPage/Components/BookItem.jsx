import React, { useState } from 'react';
import BorrowModal from './BorrowModal';

const BookItem = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex mb-4">
      <img src={book.coverUrl} alt={book.title} className="w-24 h-32 object-cover mr-4" />
      <div>
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{book.description}</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Borrow
        </button>
        <BorrowModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          book={book}
        />
      </div>
    </div>
  );
};

export default BookItem;