import React from "react";
import DashboardNavbar from "./Components/DashboardNavBar.jsx";
import DashboardSearchBar from "./Components/DashboardSearchBar.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import BookItem from "./Components/BookItem.jsx";

const Dashboard = () => {
  const user = {
    name: "Mitchell Admin",
    company: "YourCompany",
    avatar: "/book-icon.png",
    address: "215 Vine St\nScranton PA 18503\nUnited States",
    phone: "+1 555-555-5555",
    email: "admin@yourcompany.example.com",
    contact: {
      name: "Mitchell Admin",
      email: "admin@yourcompany.example.com",
      phone: "+1 555-555-5555",
      location: "Scranton",
    },
  };

  const borrowedBooks = [
    {
      id: 1,
      title: "Odoo 14 Development Cookbook",
      description: "With over 200 recipes covering real-world examples...",
      coverUrl: "/odoo-14-cookbook.jpg",
      lateFees: 0,
    },
    {
      id: 2,
      title: "Python Tricks: The Book",
      description: "Discover Python's best practices with simple examples...",
      coverUrl: "/python-tricks.jpg",
      lateFees: 2.5,
    },
    // Add more borrowed books as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4 mb-8">
            <DashboardSearchBar />
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">My Borrowed Books</h2>
              {borrowedBooks.map((book) => (
                <BookItem key={book.id} book={book} lateFees={book.lateFees} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <UserProfile user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
