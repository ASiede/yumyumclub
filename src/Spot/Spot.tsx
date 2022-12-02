/* eslint-disable react/jsx-no-bind */
import { useDispatch } from "react-redux";
import { removeSpot } from "../actions";
import { YUMYUMCLUB_BASE_URL } from "../Constants";
import { SpotType } from "../types/common";

export const Spot = ({ spot }: { spot: SpotType }) => {
  const dispatch = useDispatch();
  const onDeleteClick = async () => {
    try {
      const response = await fetch(`${YUMYUMCLUB_BASE_URL}/?id=${spot._id}`, {
        method: "DELETE",
      });
      const { _id } = await response.json();
      dispatch(removeSpot(_id));
    } catch (e) {
      // console.log({ e });
    }
  };
  return (
    <div className="spot">
      <p>{spot.name}</p>
      <div className="trash" onClick={onDeleteClick}>
        🗑️
      </div>
    </div>
  );
};

export default Spot;
