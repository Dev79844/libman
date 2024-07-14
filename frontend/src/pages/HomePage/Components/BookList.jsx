import React from 'react';
import BookItem from './BookItem';

const BookList = ({ title, books }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;