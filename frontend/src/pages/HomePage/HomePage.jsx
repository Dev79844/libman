import React from 'react';
import Navbar from './Components/Navbar.jsx';
import SearchBar from './Components/SearchBar.jsx';
import BookList from './Components/BookList.jsx';

const HomePage = () => {
  const newArrivals = [
    {
      title: "Python Tricks: The Book",
      author: "Dan Bader",
      year: "2017",
      description: "With Python Tricks: The Book you'll discover Python's best practices and the power of beautiful & Pythonic code with simple examples and a step-by-step narrative.",
      coverUrl: "/python-tricks.jpg"
    },
    {
      title: "Learning Scientific Programming with Python",
      author: "Christian Hill",
      year: "2020",
      description: "This second edition features a new chapter on data analysis with the pandas library and comprehensive updates, and new exercises and examples.",
      coverUrl: "/scientific-python.jpg"
    },
    // Add more books as needed
  ];

  const trending = [
    {
      title: "Odoo 14 Development Cookbook: Rapidly build, customize, and ...",
      author: "Parth Gajjar, Alexandre Fayolle, Holger Brunn",
      year: "2020",
      description: "With over 200 recipes covering real-world examples, take your Odoo development skills to the next level and solve complex business ...",
      coverUrl: "/odoo-14-cookbook.jpg"
    },
    {
      title: "Odoo Development Cookbook: Build effective business apps with Odoo",
      author: "Greg Moss",
      year: "2019",
      description: "Completely revised and updated, this comprehensive Odoo guide is a fourth edition of Working with Odoo. This book begins with an introduction to Odoo and helps you set up Odoo Online in your system.",
      coverUrl: "/odoo-development-cookbook.jpg"
    },
    // Add more books as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4">
        <SearchBar />
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <BookList title="New Arrivals" books={newArrivals} />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <BookList title="Trending" books={trending} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;