import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://web-production-f2599.up.railway.app";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${API}/resume/history`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        setHistory(res.data);
      } catch (err) {
        console.log("History error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <div className="container">Loading history...</div>;

  return (
    <div className="container">
      <h2 className="title">Resume History</h2>

      {history.length === 0 && <p>No uploads yet</p>}

      {history.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#334155",
            padding: "12px",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          <strong>ATS Score:</strong> {item.ats_score}
          <p>{item.ai_feedback}</p>
        </div>
      ))}
    </div>
  );
}
