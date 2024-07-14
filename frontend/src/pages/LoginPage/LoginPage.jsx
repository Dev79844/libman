import React from 'react';
import Navbar from '../HomePage/Components/Navbar';
import LoginForm from './Components/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;