import React from "react";
import { Link } from "react-router-dom";

import { urlImageLocal } from '@scripts/config';

function Success({ text_success= '¡GRACIAS POR CONTACTARSE CON NOSOTROS!' }) {
	return (
		<section className="page-success color-white bg-shadow bg-center d-flex align-items-center" style={{ backgroundImage: `url(${urlImageLocal}/section-gracias.jpg)` }}>
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-12">
            <h1 className="">{ text_success }</h1>
            <p className="xs-bold mt-4">EN BREVE ESTAREMOS ATENDIENDO SU SOLICITUD</p>
            <Link to="/" className="btn btn--success mt-4">Ir a Inicio</Link>
          </div>
        </div>
      </div>
		</section>
	)
}

export default Success;
