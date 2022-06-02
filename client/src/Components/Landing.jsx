import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      
        <h1>Welcome to the <span className="landing-title">Harry Potter</span> Place</h1>
        <h1>
          Toda la info sobre cada personaje en un solo lugar.
         
        </h1>
        <Link to="/home">
          <p>
          <button className="landing-button">
            Click Here
          </button>
          </p>
        </Link>
        <div>
          
        <h6></h6>
        </div>
      </div>
   
  );
}