import React, { useState, useEffect } from "react";
import Navbar from "./Nabvar";
import { getActivity, postCharacter } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Create.css";

export default function CharacterCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allActivity = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    actor: "",
    ancestry: "",
    house: "",
    patronus: "",
    dateOfBirth: "",
    species: "",
    image: "",
    activity: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  //   function handleCheck(e) {
  //     setInput({
  //       ...input,
  //       activity: [...input.activity, e.target.value],
  //     });
  //   }


  

  function handleSelect(e) {
    setInput({
      ...input,
      activity: [...input.activity, e.target.value],
    });
  }

  function handleDelete(el) {                           
    setInput({                                           
      ...input,                                           
      activity: input.activity.filter (cc => cc !== el),    
    })                                                              
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name ||
        !input.image) {
      return alert(
        "Faltan datos si no tienes un link para tu imagen usa este https://cdn.streamloots.com/uploads/5eb3db772a3fcd0035f7ff40/10172dc2-f05e-4804-948f-94ec8a1747ce.gif"
      );
    } else if (input.name === Number) {
      return alert("el maximo es de 100 mas de eso imposible");
    } else {
      dispatch(postCharacter(input));
      alert("now you are a new Character");
      setInput({
        name: "",
        actor: "",
        ancestry: "",
        house: "",
        patronus: "",
        dateOfBirth: "",
        species: "",
        image: "",
        activity: [],
      });
      navigate("/home");
    }
  }

  return (
    <>
      <Navbar />
      <div className="creacion">
        <div className="formulario">
          <div className="title-form">
            <h1>be a character of Harry Potter !</h1>
          </div>

          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <input
              name="name"
              placeholder="Name *"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="actor"
              placeholder="actor *"
              value={input.actor}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="ancestry"
              placeholder="ancestry *"
              value={input.ancestry}
              onChange={(e) => handleChange(e)}
            />

            <input
              name="house"
              placeholder="house *"
              value={input.house}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="patronus"
              placeholder="patronus *"
              value={input.patronus}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="dateOfBirth"
              placeholder="dd-mm-yyyy"
              value={input.dateOfBirth}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="species"
              placeholder="species *"
              value={input.alive}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="image"
              placeholder="URl Of Image"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
            <select onChange={handleSelect}>
              {allActivity.map((cc) => (
                <option value={cc.name}>{cc.name}</option>
              ))}
            </select>
            {input.activity?.map((el) => <p>{el.name}</p>)}

            <div className="created">
              <button type="submit">Ready</button>
            </div>
          </form>
          {input.activity?.map((el) => 
        <div> 
        
        <button className='dele' onClick={()=> handleDelete(el)}>x</button>
        <p>{el.name}</p>
        </div> 
        )}   
        </div>
      </div>
    </>
  );
}
