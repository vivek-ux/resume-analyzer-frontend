import axios from "axios";
import { useState } from "react";

const API = "https://web-production-f2599.up.railway.app";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(`${API}/resume/upload`, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    setResult(res.data);
  };

  return (
    <div className="container">
      <h2 className="title">Dashboard</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload Resume</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>ATS Score: {result.ats_score}</h3>
          <p>{result.ai_feedback}</p>
        </div>
      )}
    </div>
  );
}
