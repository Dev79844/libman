import React, { useState } from "react";
import Navbar from "../HomePage/Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import CreateBook from "./Components/Createbook.jsx";
import ManageBooks from "./Components/Managebooks.jsx";
import BorrowedBooks from "./Components/BorrowedBooks.jsx";
import LateFees from "./Components/LateFees.jsx";
import ViewUsers from "./Components/ViewUsers.jsx";

const LibrarianDashboard = () => {
  const [activeTask, setActiveTask] = useState("create");

  const renderTask = () => {
    switch (activeTask) {
      case "create":
        return <CreateBook />;
      case "manage":
        return <ManageBooks />;
      case "borrowed":
        return <BorrowedBooks />;
      case "latefees":
        return <LateFees />;
      case "users":
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
          <h1 className="text-3xl font-bold mb-6">Librarian Dashboard</h1>
          {renderTask()}
        </div>
      </div>
    </div>
  );
};

export default LibrarianDashboard;
