import axios from 'axios'
export const GET_CHARACTER = "GET_CHARACTER"

export function getCharacters (){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/character")
        return dispatch({
            type: GET_CHARACTER,
            payload: json.data
        })
    } 
}
