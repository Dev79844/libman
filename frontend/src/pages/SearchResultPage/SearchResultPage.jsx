import React from 'react';
import Navbar from '../HomePage/Components/Navbar.jsx';
import SearchBar from './Components/SearchBar.jsx';
import BookList from './Components/BookList.jsx';
import Pagination from './Components/Pagination.jsx';

const SearchResultsPage = () => {
  const searchResults = [
    {
      id: 1,
      title: "Odoo 14 Development Cookbook: Rapidly build, customize, and ...",
      description: "With over 200 recipes covering real-world examples, take your Odoo development skills to the next level and solve complex business problems using this guide Key FeaturesLearn to develop new modules and modify existing modules using the Odoo ...",
      coverUrl: "/odoo-14-cookbook.jpg",
      status: "Arriving in 6 Days"
    },
    {
      id: 2,
      title: "Odoo 14 Development Cookbook: Rapidly build, customize, and ...",
      description: "With over 200 recipes covering real-world examples, take your Odoo development skills to the next level and solve complex business problems using this guide Key FeaturesLearn to develop new modules and modify existing modules using the Odoo ...",
      coverUrl: "/odoo-14-cookbook.jpg",
      status: "Available 3 Copy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <BookList books={searchResults} />
        <Pagination />
      </div>
    </div>
  );
};

export default SearchResultsPage;