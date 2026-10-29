import React from 'react';
import './style.css';

import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Password Visibility</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <p>Password Length: {password.length}</p>
    </div>
  );
}

export default App;