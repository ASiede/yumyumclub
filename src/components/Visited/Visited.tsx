import { useEffect, useState } from "react";
import { YUMYUMCLUB_BASE_URL } from "../../Constants";
import { SpotType } from "../../types/common";
import { VisitedSpot } from "../VisitedSpot/VisitedSpot";

export const Visited = () => {
  const [visitedSpots, SetVisitedSpots] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${YUMYUMCLUB_BASE_URL}/?visited=true`);
      const results = await response.json();
      SetVisitedSpots(results);
    }
    fetchData();
  }, []);
  return (
    <div className="spots">
      {visitedSpots.map((visitedSpot: SpotType, index) => (
        <VisitedSpot key={`visited-spot-${index}`} visitedSpot={visitedSpot} />
      ))}
    </div>
  );
};

export default Visited;
