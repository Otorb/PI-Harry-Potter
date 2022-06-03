import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCharacter} from '../redux/actions/index'
import '../styles/Search.css'



export default function SearchBar() {
    let dispatch = useDispatch();
    const [search, setSearch] = useState("");
  
    function handleChange(e) {
      e.preventDefault(e);
      setSearch(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault(e);
      if(search === null){
        return alert("coloca un nombre real")
      }
      dispatch(searchCharacter(search));
      
    }
  
  
  return(
    <div>
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => handleChange(e)}
        />
      <button className="btn" type = "submit" onClick={(e) => handleSubmit(e)} >Buscar</button>
    </div>
  )
}