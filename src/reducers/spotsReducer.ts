import { ADD_SPOT, GET_SPOTS, REMOVE_SPOT } from "../actions";
import { SpotType } from "../types/common";

export const initialState = {
  spotsToVisit: [],
};

export const spots = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SPOTS:
      return {
        ...state,
        spotsToVisit: payload,
      };
    case REMOVE_SPOT:
      return {
        ...state,
        spotsToVisit: state.spotsToVisit.filter(
          (spot: SpotType) => spot._id !== payload
        ),
      };
    case ADD_SPOT:
      return {
        ...state,
        spotsToVisit: [...state.spotsToVisit, payload],
      };
    default:
      return state;
  }
};

export default spots;
