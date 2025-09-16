// src/file/GetStarted.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
        Welcome to My App 🚀
      </h1>
      <p style={{ fontSize: "18px", maxWidth: "600px", marginBottom: "24px" }}>
        This is your starting point. Click the button below to explore the app
        and get started with awesome features.
      </p>
      <Link to="/NavbarWithHover">
        <button
          style={{
            background: "#fff",
            color: "#333",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
