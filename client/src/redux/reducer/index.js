import { GET_CHARACTER, GET_DETAIL, SEARCH_CHARACTER, GET_ACTIVITY, POST_CHARACTER } from "../actions/index";

const initialState = {
  character: [],
  allcharacter: [],
  activity: [],
  detail: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
        allcharacter: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_CHARACTER:
      return {
        ...state,
        character: [action.payload],
      };
      case GET_ACTIVITY:
        return {
          ...state,
          activity: action.payload,
        };
        case POST_CHARACTER:
        return {
          ...state,
        };

    default:
      return state;
  }
}

export default reducer;
