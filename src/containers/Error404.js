import React from "react";
import { Link } from "react-router-dom";

function Error404() {
	return (
		<section className="error404 color-white">
			<div className="row align-items-center py-4">
				<div className="col-12 xs-center">
					<h1 className="danger" style={{fontSize: '45px', lineHeight: '45px'}}>ERROR 404</h1>
					<span className="xs-i-block mt-4 xs-bold">ESTA PÁGINA NO EXISTE</span>
					<p className="mt-4">Al parecer la página que estas buscando se rompió<br />o no existe, porque no intentas volver a la página principal,<br />quizás encuentres lo que buscabas.</p>
					<Link to="/" className="btn btn--success mt-4">Ir a página principal</Link>
				</div>
			</div>
		</section>
	)
}

export default Error404;
