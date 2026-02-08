import { useState } from "react";
import axios from "axios";

const API = "https://web-production-f2599.up.railway.app";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await axios.post(`${API}/auth/register`, { email, password });
    alert("Registered successfully");
  };

  return (
    <div className="container">
      <h2 className="title">Register</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>Create Account</button>
    </div>
  );
}
