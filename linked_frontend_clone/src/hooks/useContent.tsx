import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/get_content`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        setContent(res.data.posts);
        console.log("Fetched content:", res.data.posts);
      } catch (err) {
        console.error("Error fetching content:", err);
      }
    }

    fetchData();
  }, []);

  return contents;
}
