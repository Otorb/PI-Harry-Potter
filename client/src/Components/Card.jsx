import React from "react";
import "../styles/Card.css";

export default function Card({ id, name, image, actividades }) {
  return (
    <div class="tiene mb-5 ">
      
      <div className="row">
     
        <div class="col-md-4">
      
          <div class="card">
           
            <img
              src={image} alt={name}
              className="fluid"
            />
            <div class="d-flex justify-content-center align-items-center">
              
              <div class="info info-yellow">
              
                <span class="user-icons">
                  <img src="https://i.imgur.com/1NZfd8E.png" width="30" />
                </span>
                <div class="user-profile d-flex flex-row">
                 
                  <div class="d-flex flex-column mr-4">
                  
                    <span class="name">{name}</span>{" "}
                    <small class="designation">{actividades + "   "}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="carta">


      <div class="col-md-6 col-lg-4">
            <div class="card-box">
                <div class="card-thumbnail">
                    <img src={image} alt={name} class="img-fluid" />
                </div>
                <h3><p class="mt-2 text-danger">{name}</p></h3>
                <p class="text-secondary">{actividades + "   "}</p>
            </div>
        </div>


 </div> */
}

// <div class="slide-container swiper">
//   <div class="slide-content">
//     <div class="card-wrapper swiper-wrapper">
//       <div class="image-content">
//         <span class="overlay"></span>

//         <div class="card-image">
//           <img class="card-img" src={image} alt={name} />
//         </div>
//       </div>

//       <div class="card-content">

//         <h2 class="name">{name}</h2>

//         <p>{id}</p>
//         <p class="description">{actividades + "   "}</p>
//       </div>
//     </div>
//   </div>
// </div>

{
  /* <div className="todo">
<div class="profile-card shadow bg-light p-4 my-5 rounded-3">
    <div class="profile-photo shadow">
        <img src={image} alt={name} class="img-fluid" />
    </div>
    <h3 class="pt-3 text-dark">{name}</h3>
    <p class="text-secondary">{actividades + "   "}</p>
    
</div>
</div> */
}
