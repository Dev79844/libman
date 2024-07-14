import React from 'react';
import Navbar from '../HomePage/Components/Navbar';
import SignupForm from './Components/SignupForm';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;