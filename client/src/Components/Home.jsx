import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions/index";
import { Link } from 'react-router-dom'
import Navbar from "./Nabvar";
import Search from './SearchBar'
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
  const [characterPorPagina, setcharacterPorPagina] = useState(12);
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

        <Search />
        
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
					 <img src={bela} alt="wait" />
				</div> 
       
        
        
			}
        </div>


    </div>
  );
};

export default Home;
