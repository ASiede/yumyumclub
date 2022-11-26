import { useEffect, useState } from "react";
import { Spot } from "./Spot";

const spots = [
  { name: "mama dut", dateVisited: null },
  { name: "taco bell", dateVisited: null },
];

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
  return (
    <div className="Spots">
      {spots.map((spot) => {
        return <Spot spot={spot} />;
      })}
    </div>
  );
};

export default Spots;
