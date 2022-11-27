/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from "react";
import { Spot } from "../Spot";
import { SpotType } from "../types/common";
import { YUMYUMCLUB_BASE_URL } from "../Constants";
import "./Spots.css";

const clearInput = () => {
  const input = document.getElementById("name") as HTMLInputElement;
  if (input != null) {
    input.value = "";
  }
};

export const Spots = () => {
  const [spots, setSpots] = useState([]);
  const [spotName, setSpotName] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${YUMYUMCLUB_BASE_URL}/?visited=false`);
      const results = await response.json();
      setSpots(results);
    }
    fetchData();
  }, []);

  const addSpotButtonHanlder = async () => {
    if (!spotName) return;
    const spot = { name: spotName };
    const response = await fetch(YUMYUMCLUB_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spot),
    });
    const result = await response.json();
    setSpots(spots.concat(result));
    setSpotName("");
    clearInput();
  };

  const addSpotReturnHandler = async (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const input = event.target as HTMLInputElement;
      setSpotName(input.value);
      await addSpotButtonHanlder();
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpotName(event.target.value);
  };

  return (
    <div>
      <form className="spots-form">
        <label htmlFor="name">Add a new spot to the list:</label>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            onKeyDown={addSpotReturnHandler}
            onChange={onChangeHandler}
          />
          <button type="button" onClick={addSpotButtonHanlder}>
            Add
          </button>
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
