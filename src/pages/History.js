import { useEffect } from "react";
import axios from "axios";

const API = "https://web-production-f2599.up.railway.app";

export default function History() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    axios
      .get(`${API}/resume/history`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  return <div className="container">Check console</div>;
}
