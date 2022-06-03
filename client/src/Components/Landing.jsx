import React from "react";
import { Link } from "react-router-dom";
import '../styles/Landing.css'



export default function Landing() {
  return (
    <div className="landing">
      <h1 className="frase">
        Welcome to the <span className="landing-title">Harry Potter</span> Place
      </h1>
      <h1 className="frase2">Toda la info sobre cada personaje en un solo lugar.</h1>
      <Link to="/home">
        <div className="box-2">
          <button className="btn btn-two">Click Here </button>
        </div>
      </Link>
      <div>
        <h6></h6>
      </div>
    </div>
  );
}
