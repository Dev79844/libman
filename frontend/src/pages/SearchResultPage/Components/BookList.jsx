import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  return (
    <div className="mb-8">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;