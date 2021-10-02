import React from 'react';
import { urlStorage } from '@scripts/config';
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@actions/cartActions';

export default function ItemCardProduct({ className, product }){

  const { id, title, price, description, category, image, rating } = product;

  const product_url= `/productos/${id}`;

  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product));
  }

  return(
    <div className={`card xs-mx-auto ${className}`}>
      <div className="card__image">
        <Link to={product_url}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="card__data">
        <Link to={product_url}>
          <span>{title}</span>
        </Link>
        <br />
        <span className="color4 xs-bold">S/. {price.toFixed(2)}</span>
      </div>
      <div className="card__buttons">
        {
          cart.find(item_cart=> item_cart.id == id) ? 
          <button type="button" className="btn btn--color2 color-black-force">Agregado</button> :
          <button type="button" className="btn btn--dark-theme" onClick={ ()=> handleAddToCart(product) }>Agregar</button>
        }
      </div>
    </div>
  );
}