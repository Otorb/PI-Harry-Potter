import axios from 'axios'
export const GET_CHARACTER = "GET_CHARACTER"
export const GET_DETAIL = "GET_DETAIL"
export const SEARCH_CHARACTER = "SEARCH_CHARACTER"
export const GET_ACTIVITY = "GET_ACTIVITY"
export const POST_CHARACTER = "POST_CHARACTER"



export function getCharacters (){
    return async function(dispatch){
        var json = await axios.get(`/character`)
        return dispatch({
            type: GET_CHARACTER,
            payload: json.data
        })
    } 
}

export const getDetail = (id) => {
    return async function (dispatch) {
        try {
          var json = await axios.get(`/character/${id}`);
          return dispatch({
            type: GET_DETAIL,
            payload: json.data,
          });
        } catch (error) {
          console.log(error);
        }
      };
    }

  //   return function (dispatch) {
  //     axios.get(`http://localhost:3001/character/${id}`).then(result => {
  //       return dispatch({
  //         type: GET_DETAIL,
  //         payload: result.data,
  //       });
  //     })
  //     .catch((err) => {
  //         console.log(err, 'getDetail falla');
  //         });
  
  //   };
  // };

  export function searchCharacter(search) {
    return function (dispatch) {
      axios
        .get(`/character?name=` + search)
        .then((character) => {
          dispatch({
            type: SEARCH_CHARACTER,
            payload: character.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }

  export function getActivity(){
    return async function (dispatch){
        await axios.get(`/activity`).then((resp) =>{
            dispatch({
                type:GET_ACTIVITY,
                payload: resp.data
            })
        })
    }
  }

  export function postCharacter(payload) {
    return async function (dispatch) {
      const json = await axios.post(`/character`, payload);
      return json;
    };
  }


