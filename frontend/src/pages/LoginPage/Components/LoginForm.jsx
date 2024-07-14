import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_URI}/signin`,
      {
        email,
        password,
      },
    );
    if (response.status == 200) {
      localStorage.setItem("token", response.data?.token);
      localStorage.setItem("role", response.data?.role);
      if (response.data?.role == "admin") {
        navigate("/admin");
      }
      navigate("/");
    }
  };
  return (
    <div className="w-full max-w-md mry-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mry-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
      <div className="text-center">
        <button className="text-blue-500 p-3">Signup using Google</button>
        <p></p>
        <button className="text-blue-500">Signup using email address</button>
      </div>
    </div>
  );
};

export default LoginForm;
