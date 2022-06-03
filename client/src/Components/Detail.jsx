import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/actions/index";
import detal from '../images/detal.gif'


export default function Detail() {
    const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.detail);

  const [loader, setLoader] = useState(false);


  useEffect(() => {
    dispatch(getDetail(id));
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <div className="detail">
      {loader ? (
         <img src={detal} alt="loader" />
      ) : (
        <div>
        <img src={detail.image} alt="" className="img" />
        <h1>{detail.name}</h1>
        <h1>{detail.dateOfBirth} </h1>
        <h1>{detail.ancestry} </h1>
        <h1>{detail.patronus}</h1>
        <h1>{detail.actor}</h1>
        <h1>{detail.house}</h1>
        <h1>{detail.actividades}</h1>

        
          </div>
      )}
    </div>
  );
}