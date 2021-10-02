import React from "react";

function Preloader({ text_loading = 'Cargando...' }){
  return(
    <div className="loader-page loader-page--dark">
      <div className="loader-name">{text_loading}</div>
      <div className="loader-circle"></div>
    </div>
  )
}

export default Preloader;
