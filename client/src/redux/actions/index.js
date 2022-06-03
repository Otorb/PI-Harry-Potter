import axios from 'axios'
export const GET_CHARACTER = "GET_CHARACTER"
export const GET_DETAIL = "GET_DETAIL"

export function getCharacters (){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/character")
        return dispatch({
            type: GET_CHARACTER,
            payload: json.data
        })
    } 
}

export const getDetail = (id) => {
    // return async function (dispatch) {
    //     try {
    //       var json = await axios.get(`http://localhost:3001/character/${id}`);
    //       return dispatch({
    //         type: GET_DETAIL,
    //         payload: json.data,
    //       });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    // }

    return function (dispatch) {
      axios.get(`http://localhost:3001/character/${id}`).then(result => {
        return dispatch({
          type: GET_DETAIL,
          payload: result.data,
        });
      })
      .catch((err) => {
          console.log(err, 'getDetail falla');
          });
  
    };
  };
