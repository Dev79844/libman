import React from "react";
import Navbar from "../HomePage/Components/Navbar.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import BookList from "./Components/BookList.jsx";
import Pagination from "./Components/Pagination.jsx";

const SearchResultsPage = () => {
  const searchResults = [
    {
      title: "Odoo 14 Development Cookbook: Rapidly build, customize, and ...",
      author: "Parth Gajjar, Alexandre Fayolle, Holger Brunn",
      year: "2020",
      description:
        "With over 200 recipes covering real-world examples, take your Odoo development skills to the next level and solve complex business ...",
      coverUrl: "/odoo-14-cookbook.jpg",
    },
    {
      title:
        "Odoo Development Cookbook: Build effective business apps with Odoo",
      author: "Greg Moss",
      year: "2019",
      description:
        "Completely revised and updated, this comprehensive Odoo guide is a fourth edition of Working with Odoo. This book begins with an introduction to Odoo and helps you set up Odoo Online in your system.",
      coverUrl: "/odoo-development-cookbook.jpg",
    },
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
