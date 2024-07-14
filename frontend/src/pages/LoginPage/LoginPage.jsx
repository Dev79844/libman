import React from 'react';
import Navbar from '../HomePage/Components/Navbar';
import LoginForm from './Components/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;