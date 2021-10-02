import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { urlStorage, urlImageLocal } from '@scripts/config';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '@actions/cartActions';

const imageLogo = `${urlImageLocal}/logo.png`;

function Header() {

	const { cart } = useSelector(state => state.cart);
	const [ totalQuantity, setTotalQuantity] = useState(0);
	const [ menuActive, setMenuActive] = useState(false);
	const [ menuCartActive, setMenuCartActive] = useState(false);
	const location = useLocation();
	const dispatch = useDispatch();
	
	useEffect(()=>{
		if(!cart) return;

		handleSumarTotalQuantityCart(cart);
	},[cart])

	useEffect(()=>{
		setMenuActive(false);
		setMenuCartActive(false);
		window.scrollTo(0, 0);
	},[location])

	const handleClickBotonHamburger = (e)=>{
		e.preventDefault();
		setMenuActive(!menuActive);
	}

	const handleDeleteFromCart=(id)=>{
    dispatch(deleteFromCart(id));
	}
	
	const handleClickMenuCart=(e)=>{
		e.preventDefault();
		setMenuCartActive(!menuCartActive);
	}

	const handleSumarTotalQuantityCart=(cart)=>{
		let sum = 0;

		for (let i = 0; i < cart.length; i++) {
				sum += cart[i].quantity;
		}

		setTotalQuantity(sum);
	}

	return (
		<header className="header">
			<nav className="navbar">
				<div className="container">
					<div className="container-navbar">

					<Link to="/" className="navbar-brand logo-brand">
						<img className="logo" src={imageLogo} alt="Logo"/>
					</Link>

						<div className="container-nav">
							<div className={`navbar-nav-menu ${menuActive? `active`:``}`}>
								<ul className="nav-menu">
									<li className="d-lg-none">
										<Link to="/" className="navbar-brand logo-brand">
											<img className="logo" src="/assets/images/logo.png" alt="Logo"/>
										</Link>
									</li>
									{/* <li><NavLink exact to="/productos" className="link-menu">Productos</NavLink></li> */}
									<li className="d-none d-lg-inline-block">
										<a className="cart xs-mx-auto" href="#" onClick={handleClickMenuCart}>
											<span className="counter">{ totalQuantity }</span>
										</a>
										<div className={`ctn-list-cart ${menuCartActive? `active`:``}`}>
											<div className="ctn-items-cart">
												{
													cart && cart.map((item, i)=> (
														<div className="card-product-cart" key={i}>
															<div className="row no-gutters align-items-center py-2">
																<div className="col-2">
																	<img src={item.image} alt={item.title} />
																</div>

																<div className="col-8 pl-4">
																	<p className="card-product-cart__subtitle text-truncate" title={item.category}>{item.category}</p>
																	<h5 className="card-product-cart__title text-truncate" title={item.title}>{item.title}</h5>
																</div>
																<div className="col-2 xs-right">
																	<button type="button" className="btn btn--danger" onClick={ ()=> handleDeleteFromCart(item.id) }>
																		<i className="fa fa-trash"></i>
																	</button>
																</div>
															</div>
														</div>
													))
												}
												{
													cart.length == 0 ? <span className="d-block m-3">Ningún producto en carrito</span> : null
												}
											</div>

											<div className="bg-color-black">
												<div className="xs-center py-2">
													<Link to="/cotizar" className="btn btn--color-white">IR AL CARRITO</Link>
												</div>
											</div>

										</div>
									</li>
									<li><Link to="/cotizar" className="btn btn--color1">COTIZAR AHORA</Link></li>
									
								</ul>
							</div>
							<div className="button-hamburger">
								<a className={`toggle-menu ${menuActive ? `close`: ``}`} href="#" onClick={handleClickBotonHamburger}><i></i><i></i><i></i></a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
