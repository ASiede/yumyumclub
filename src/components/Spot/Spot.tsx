/* eslint-disable react/jsx-no-bind */
import { useDispatch } from "react-redux";
import { removeSpot } from "../../actions";
import { SpotType } from "../../types/common";
import { getBaseUrl } from "../../utils/utils";

export const Spot = ({ spot }: { spot: SpotType }) => {
  const dispatch = useDispatch();
  const onDeleteClick = async () => {
    try {
      const response = await fetch(`${getBaseUrl()}/?id=${spot._id}`, {
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
