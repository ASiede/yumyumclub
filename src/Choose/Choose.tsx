/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from "react";
import { YUMYUMCLUB_BASE_URL } from "../Constants";
import "./Choose.css";

export const Selector = () => {
  const [spots, setSpots] = useState([]);
  const [randomSpot, setRandomSpot] = useState({ name: "" });
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${YUMYUMCLUB_BASE_URL}/?visited=false`);
      const results = await response.json();
      setSpots(results);
    }
    fetchData();
  }, []);

  const onChooseClickHandler = () => {
    const randomSpot = spots[Math.floor(Math.random() * spots.length)];
    setRandomSpot(randomSpot);
  };

  const onGoClickHandler = () => {
    console.log("lets go!");
  };

  return (
    <div className="choose">
      <button className="choose-btn" onClick={onChooseClickHandler}>
        Choose a Spot
      </button>
      {randomSpot.name && <p className="random-spot">{randomSpot.name}</p>}
      {randomSpot.name && <button onClick={onGoClickHandler}>LET'S GO!</button>}
    </div>
  );
};

export default Selector;
