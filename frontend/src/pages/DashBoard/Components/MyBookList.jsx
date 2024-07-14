import React from 'react';
import BookItem from '../../HomePage/Components/BookItem';

const MyBookList = ({ books }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">My Books</h2>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
};

export default MyBookList;