import React, { useState } from 'react';
import Navbar from '../HomePage/Components/Navbar';
import Sidebar from './Components/Sidebar';
import CreateBook from './Components/CreateBook';
import ManageBooks from './Components/ManageBooks';
import ViewUsers from './Components/ViewUsers';

const AdminDashboard = () => {
  const [activeTask, setActiveTask] = useState('create');

  const renderTask = () => {
    switch (activeTask) {
      case 'create':
        return <CreateBook />;
      case 'manage':
        return <ManageBooks />;
      case 'users':
        return <ViewUsers />;
      default:
        return <CreateBook />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar setActiveTask={setActiveTask} />
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          {renderTask()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;