import { SEARCH_NEWS } from "../actions/actionTypes";
import { ActionType } from "../actions/newsActions";

export default (
  state = "",
  action: ActionType = { type: "", payload: null },
) => {
  switch (action.type) {
    case SEARCH_NEWS:
      return action.payload;
    default:
      return state;
  }
};
