import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import History from "./pages/History";

function Navbar() {
  return (
    <div
      style={{
        background: "#020617",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/history">History</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
