import { LOAD_NEWS } from "../actions/actionTypes";
import { ActionType } from "../actions/newsActions";

export default (
  state = [],
  action: ActionType = { type: "", payload: null },
) => {
  switch (action.type) {
    case LOAD_NEWS:
      return action.payload.results || [];
    default:
      return state;
  }
};
