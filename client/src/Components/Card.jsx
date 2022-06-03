import React from "react";
import {Link } from 'react-router-dom';




export default function Card ({ name, image,  actividades }){
    return (
        <div>
          <div className="p">
            <div className="browser">
            <img src={image} alt={name}  width="200" height="250" />
              <h4>{name}</h4>
            </div>
            <div className="circle">
              
              <h4>actividades:{actividades}</h4>
            </div>
          </div>
        </div>
      );
}



// const Card= ({characters}) => {

//     const {dateOfBirth, patronus, name, house, image, id, actividades } = characters 

    
//     return (
//         <div className="home">
//             <img src={image} alt={name} />
// <Link to ={`/${id}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
//             <h1>{name}</h1>
//             </Link>
//             {/* <h2>{actor}</h2> */}
//             <h3>{house}</h3>
//             <h4>{dateOfBirth}</h4>
//             <h3>{patronus}</h3>
//             <h3>{actividades}</h3>

//         </div>
        
//     )
    
// }

// export default Card;