import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://web-production-f2599.up.railway.app";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post(`${API}/auth/login`, { email, password });

    localStorage.setItem("token", res.data.access_token);
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}
