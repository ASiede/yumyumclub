import { createAction } from "redux-actions";

export const ADD_SPOT = "ADD_SPOT";
export const GET_SPOTS = "GET_SPOTS";
export const REMOVE_SPOT = "REMOVE_SPOT";
export const addSpot = createAction(ADD_SPOT);
export const getSpots = createAction(GET_SPOTS);
export const removeSpot = createAction(REMOVE_SPOT);
