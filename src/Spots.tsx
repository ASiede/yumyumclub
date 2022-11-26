import React, { useEffect, useState } from "react";
import "./App.css";

export const Spots = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://yumyumclub-api.netlify.app/");
      const results = await response.json();
      setText(results[0].name);
    }
    fetchData();
  }, []);
  return <div className="Spots">{text}</div>;
};

export default Spots;
