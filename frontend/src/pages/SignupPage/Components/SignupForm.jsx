import React from 'react';

const SignupForm = () => {
  return (
    <div className="w-full max-w-md mry-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mry-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Mobile">
            Mobile
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Mobile"
            type="text"
            placeholder="Mobile"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Password"
            type="Password"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <button className="text-blue-500 p-3">Signup using Google</button>
        <p></p>
        <button className="text-blue-500">Signin using email address</button>
      </div>
    </div>
  );
};

export default SignupForm;