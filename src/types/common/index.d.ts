/* eslint-disable no-unused-vars */
import { compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

interface SpotType {
  id: string;
  name: string;
  dateVisited?: Date | null;
}
