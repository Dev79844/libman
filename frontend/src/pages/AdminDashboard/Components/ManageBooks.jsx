import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from API
    // For now, we'll use dummy data
    const fetchData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_APP_URI}/books`);
      if (response.status == 200) {
        console.log(response.data);
        setBooks(response.data?.books || []);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    // Delete book logic here
    const response = axios.delete(
      `${import.meta.env.VITE_APP_URI}/book/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleUpdate = (id) => {
    // Update book logic here
    console.log("Update book with id:", id);
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
          {books &&
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>
                  {book.book_author?.map(
                    (author) => author.authors?.name + " ",
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleUpdate(book.id)}
                    className="mr-2 text-blue-500"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
