import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <span className="mr-4">Page :</span>
      <a href="#" className="mx-1 px-3 py-1 rounded bg-blue-500 text-white">1</a>
      <a href="#" className="mx-1 px-3 py-1 rounded text-blue-500">2</a>
      <a href="#" className="mx-1 px-3 py-1 rounded text-blue-500">3</a>
      <a href="#" className="ml-4 text-blue-500">Next Page</a>
    </div>
  );
};

export default Pagination;