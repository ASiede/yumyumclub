import { useEffect, useState } from "react";
import { Spot } from "../Spot";
import { SpotType } from "../types/common";
import { YUMYUMCLUB_BASE_URL } from "../Constants";
import "./Spots.css";

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
    <div>
      <form className="spots-form">
        <label>Add a new spot to the list:</label>
        <div>
          <input />
          <input type="submit" value="+" />
        </div>
      </form>
      <div className="Spots">
        {spots.map((spot: SpotType) => {
          return <Spot spot={spot} />;
        })}
      </div>
    </div>
  );
};

export default Spots;
