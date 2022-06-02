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
          recipes: action.payload,
          allRecipes: action.payload,
        }; default:
        return state;
    }
  }
  
  export default reducer;