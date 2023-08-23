import React, { useState, useEffect } from "react";

const Favoritos = ({ favorito }) => {
    
  const heartIconClass = favorito.style === "btn-light" ? "text-danger" : "";

  useEffect(() =>{
},[favorito])

  return (
    <button href="#" className={`btn ${favorito.style} border border-secondary py-2 icon-hover px-3`} onClick={favorito.handler} >
      <i className={`me-1 fa fa-heart fa-lg ${heartIconClass}`}></i> Favoritos
    </button>
  );
};

export default Favoritos;