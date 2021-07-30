import { IMinutes } from "../../interfaces";
import {
  LOAD_BLOCKS,
  LOAD_CATEGORY,
  LOAD_MINUTES,
} from "../Actions/courseActions";

type IAction = {
  type: string;
  payload: {
    minutes: IMinutes[];
    blocks: string[];
    categories: string[];
  };
};

const initState = {
  blocks: ["Course 1", "Course 2"],
  all: [{ name: "a", id: 1, time: 234, url: "url-image" }],
};

const courseReducers = (state = initState, action: IAction) => {
  switch (action.type) {
    case LOAD_BLOCKS:
      return { ...state, blocks: action.payload.blocks };
    case LOAD_MINUTES:
      return { ...state, minutes: action.payload.minutes };
    case LOAD_CATEGORY:
      return { ...state, categories: action.payload.categories };
    default:
      return state;
  }
};
export default courseReducers;
