import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContent] = useState([]);

  useEffect(() => {
    const res = axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          "token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setContent(res.data.content1);
      });
  }, []);

  return contents;
}
