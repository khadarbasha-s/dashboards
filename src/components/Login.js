import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Mock credentials - using lowercase usernames for consistency
  const users = {
    admin: { password: "admin123", role: "admin" },
    root: { password: "root123", role: "root-admin" },
    student: { password: "student123", role: "student" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Convert username to lowercase to make it case-insensitive
    const usernameLower = username.toLowerCase().trim();
    const user = users[usernameLower];

    console.log("Attempting login with:", { usernameLower, user }); // Debug log

    if (user && user.password === password) {
      console.log("Login successful, user role:", user.role); // Debug log
      // Save authentication data
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", user.role);

      // Redirect based on role using props.history
      if (user.role === "admin") {
        props.history.push("/admin-dashboard");
      } else if (user.role === "root-admin") {
        props.history.push("/root-admin-dashboard");
      } else if (user.role === "student") {
        props.history.push("/student-dashboard");
      }
    } else {
      console.log("Login failed - invalid credentials"); // Debug log
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default withRouter(Login);