import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/actions/index";
import "../styles/Detail.css";
import detal from "../images/detal.gif";
import Navbar from "../Components/Nabvar";

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
    <div>
      <Navbar />
      <div>
      <div className="detail">
        {loader ? (
          <img src={detal} alt="loader" />
        ) : (
          <div className="forma">
            <div className="title">
              <h1> Hi! I'm {detail.actor}</h1>
            </div>
            <div className="person">
              <img src={detail.image} alt="" className="pero" />
            </div>
            <div className="listado">
              <span>
                My person is {detail.name} I was born in {detail.dateOfBirth} my patronus is {detail.patronus} and I am {detail.ancestry} I belong to {detail.house} and I am {detail.species}
              </span>
            </div>
            <div className="types">
              <p>expert in</p>
              <div className="type">
                <h1>{detail.actividades}</h1>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
