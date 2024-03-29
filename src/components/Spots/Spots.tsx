/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spot } from "../Spot/Spot";
import { SpotType } from "../../types/common";
import { addSpot, getSpots } from "../../actions";
import "./Spots.css";
import { getBaseUrl } from "../../utils/utils";

const clearInput = () => {
  const input = document.getElementById("name") as HTMLInputElement;
  if (input != null) {
    input.value = "";
  }
};

export const Spots = () => {
  const spots = useSelector((state: any) => state.spots.spotsToVisit);
  const [spotName, setSpotName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${getBaseUrl()}/?visited=false`);
      const results = await response.json();
      dispatch(getSpots(results));
    }
    fetchData();
  }, []);

  const addSpotButtonHanlder = async () => {
    if (!spotName) return;
    const spot = { name: spotName };
    const response = await fetch(getBaseUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spot),
    });
    const newSpot = await response.json();
    dispatch(addSpot(newSpot));
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
      <div className="spots">
        {spots.map((spot: SpotType, index: any) => (
          <Spot key={`spot-${index}`} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default Spots;
