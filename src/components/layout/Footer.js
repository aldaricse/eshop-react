import React from "react";
import { Link } from "react-router-dom";

function Footer() {

	return (
		<footer className="footer bg-color-black">
			<div className="container">
				<div className="footer-content">
					<div className="row">
						<div className="col-md-8 xs-mx-auto">
							<p className="footer-text xs-center">Todos los derechos reservados.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
