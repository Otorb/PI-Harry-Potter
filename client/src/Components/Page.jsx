import React from "react";
import '../styles/Paginado.css'

export default function Page({ characterPorPagina, character, paginado }) {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(character/characterPorPagina); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="forma">
      <ul className="lista">
        {
          pageNumbers?.map(number => (
              <li className="number" key={number} >
            <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}