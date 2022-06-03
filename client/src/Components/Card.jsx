import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

export default function Card({ id,name, image, actividades }) {
  return (
    <div class="slide-container swiper">
      <div class="slide-content">
        <div class="card-wrapper swiper-wrapper">
          <div class="image-content">
            <span class="overlay"></span>

            <div class="card-image">
              <img class="card-img" src={image} alt={name} />
            </div>
          </div>

          <div class="card-content">
       
            <h2 class="name">{name}</h2>
            
            <p>{id}</p>
            <p class="description">{actividades + "   "}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

