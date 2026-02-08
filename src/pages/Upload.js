import { useState } from "react";
import axios from "axios";

const API = "https://web-production-f2599.up.railway.app";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const upload = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(`${API}/resume/upload`, formData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    setResult(res.data);
  };

  return (
    <div className="container">
      <h2 className="title">Upload Resume</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>ATS Score: {result.ats_score}</h3>
          <p>{result.ai_feedback}</p>
        </div>
      )}
    </div>
  );
}
