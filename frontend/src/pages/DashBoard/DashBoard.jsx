import React from 'react';
import DashboardNavbar from './Components/DashboardNavBar';
import DashboardSearchBar from './Components/DashboardSearchBar';
import UserProfile from './Components/UserProfile';
import MyBookList from './Components/MyBookList';

const Dashboard = () => {
  const user = {
    name: "Mitchell Admin",
    company: "YourCompany",
    avatar: "/user-avatar.jpg",
    address: "215 Vine St\nScranton PA 18503\nUnited States",
    phone: "+1 555-555-5555",
    email: "admin@yourcompany.example.com",
    contact: {
      name: "Mitchell Admin",
      email: "admin@yourcompany.example.com",
      phone: "+1 555-555-5555",
      location: "Scranton"
    }
  };

  const myBooks = [
    {
      title: "Odoo 14 Development Cookbook: Rapidly build, customize, and ...",
      description: "With over 200 recipes covering real-world examples, take your Odoo development skills to the next level and solve complex business problems using this guide Key FeaturesLearn to develop new modules and modify existing modules using the Odoo ...",
      coverUrl: "/odoo-14-cookbook.jpg",
      daysRemaining: "3 Days"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4 mb-8">
            <DashboardSearchBar />
            <MyBookList books={myBooks} />
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