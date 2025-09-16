// LoginPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login with: ${email} / ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
            Login
          </button>
          <div className="mt-4 text-center">
  <Link
    to="/signuppage"
    className="inline-block w-full bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700 transition"
  >
    Signup
  </Link>
</div>



        </form>
      </div>
    </div>
  );
}

export default LoginPage;
