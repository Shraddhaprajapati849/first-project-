// SignupPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Sign Up:\nName: ${fullName}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-3 py-2 rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border px-3 py-2 rounded"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Submit 
          </button>

            <div className="mt-4 text-center">
              <Link
                to="/loginpage"
                className="inline-block w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700 transition"
              >
                 Login
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
