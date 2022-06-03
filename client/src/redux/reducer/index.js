import {
    GET_CHARACTER
}from '../actions/index'

const initialState = {
    character: [],
    allcharacter: [],
    activity: [],
  };
  function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_CHARACTER:
        return {
          ...state,
          character: action.payload,
          allcharacter: action.payload,
        }; default:
        return state;
    }
  }
  
  export default reducer;