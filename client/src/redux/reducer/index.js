import {
    GET_CHARACTER,
    GET_DETAIL,
}from '../actions/index'

const initialState = {
    character: [],
    allcharacter: [],
    activity: [],
    detail:[]
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
          return{
            ...state,
            detail: action.payload
          }
        default:
        return state;
    }
  }
  
  export default reducer;