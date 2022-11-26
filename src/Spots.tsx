import { useEffect, useState } from "react";
import { Spot } from "./Spot";
import { SpotType } from "./types/common";
import { YUMYUMCLUB_BASE_URL } from "./Constants";

export const Spots = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${YUMYUMCLUB_BASE_URL}/?visited=false`);
      const results = await response.json();
      setSpots(results);
    }
    fetchData();
  }, []);
  return (
    <div className="Spots">
      {spots.map((spot: SpotType) => {
        return <Spot spot={spot} />;
      })}
    </div>
  );
};

export default Spots;
