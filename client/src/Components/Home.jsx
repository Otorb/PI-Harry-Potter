import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions/index";
import { Link } from 'react-router-dom'
import Navbar from "./Nabvar";
import Paginado from "./Page"
import Card from "./Card";
import "../styles/Home.css";
import bela from "../images/bela.gif"


const Home = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character)


  useEffect(() =>{
      dispatch(getCharacters())
  }, [])


  //paginados
  const [paginaActual, setPaginaActual] = useState(1);
  const [characterPorPagina, setcharacterPorPagina] = useState(6);
  const iDelUltimo = paginaActual * characterPorPagina;
  const iDelPrimero = iDelUltimo - characterPorPagina;
  const characterActual = character.slice(iDelPrimero, iDelUltimo);

  const paginado = (numeroPagina) => {
    setPaginaActual(numeroPagina)
}



  return (
    <div>
      <Navbar />
      <div className="home">
               
        <Paginado 
        characterPorPagina ={characterPorPagina}
        character ={character.length}
        paginado={paginado}
        />
      {
				characterActual.length > 0 ?
				<div>
					<div className="pokeCards">
						{
							characterActual?.map((character) => {
								return(

                   <Link to={"/home/" + character.id} style={{textDecoration: 'inherit', color: 'inherit'}}>
									<Card 
                  key={character.id}
                  name={character.name} 
                  actividades={character.actividades}
                 image ={character.image}
                 
                   />
                   </Link> 
								)
							})
						}
					</div>
				</div>
				:
				<div>
					<h1 className="moment">  We cannot help you in this moment</h1> : <img src={bela} alt="wait" />
				</div> 
       
        
        
			}



{/* 
      {character.length > 0 ? (
        character?.map((character) => <Card 
        
        name={character.name} />)
      ) : (
         <img src={bela} alt="loader" />
      )} */}

        </div>


    </div>
  );
};

export default Home;
