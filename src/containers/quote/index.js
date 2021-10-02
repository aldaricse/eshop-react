import React, { useState, useEffect, useRef }  from "react";
import { urlStorage } from '@scripts/config';
import { formToJSON } from '@scripts/helpers';

// api
import { postQuotation } from "@scripts/api/quote";

// components
import Preloader from "@commons/Preloader";

// redux
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, updateFromCart, clearCart } from '@actions/cartActions';

// containers
import Success from "@containers/Success";

function Quote(){

  const refForm = useRef(null);
  const refInputsNumber = useRef([]);
  const [ totalCart, setTotalCart] = useState(0);
  const [ loaderAjax, setLoaderAjax ] = useState(null);
  const [ success, setSuccess] = useState(null);

  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

	useEffect(()=>{
		if(!cart) return;

		if(cart && cart.length > 0) handleSumarTotalCart(cart);
	},[cart])

  const handleSubmitForm=(e)=>{
    e.preventDefault();
    setLoaderAjax(true);
    postData();
  }

  const postData = async () =>{  
    const json= formToJSON(refForm.current);
    json.check_terms = json.check_terms == "on" ? '1' : '0';
    json.products= cart.map(item=> ({producto: item.id, cantidad: item.quantity }));
    console.log(json);
  
    dispatch(clearCart());
    setLoaderAjax(false);
    setSuccess(true);
  }

  if (success) {
    window.scrollTo(0, 0);
    return <Success text_success= '¡GRACIAS POR REGISTRAR LA COTIZACIÓN!'/>;
  }

  const handleDeleteFromCart=(id)=>{
    dispatch(deleteFromCart(id));
  }

  const handleUpdateFromCart=(e, id)=>{
    let quantity = e.target.value;
    dispatch(updateFromCart(id, quantity));
  }

  const handleChangeValueInputNumber = (index, id, symbol)=>{
    let val = refInputsNumber.current[index].value;
    // console.log(refInputsNumber.current[index].value);

    if(symbol == '-'){
      val--;
    }else{
      val++;
    }

    if(val < 1) return;

    refInputsNumber.current[index].value = val;
    dispatch(updateFromCart(id, val));
  }

	const handleSumarTotalCart=(cart)=>{
		let sum = 0;

		for (let i = 0; i < cart.length; i++) {
				sum += (cart[i].price * cart[i].quantity);
		}

		setTotalCart(sum);
	}

  return (
    <div className="quote">

      <section className="section quote-banner bg-color-black">

        <div className="container">
          <div className="row">
            <div className="col-12 xs-mx-auto color-white">
              <div className="row">
                <div className="col-12 heading-section">
                  <h2 className="xs-center">COTIZAR</h2>
                </div>
              </div>
            </div>     
          </div>
        </div>

      </section>

      <section className="section quote-form">
        <div className="container">

          <div className="row">
            <div className="col-12">
              <h4 className="d-flex align-items-center">
                <i className="cart mr-2"></i>MI CARRITO
              </h4>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-7">
              <div className="heading-section p-2 bg-white-light">
                <h5 className="xs-left dark-color">PRODUCTOS</h5>
              </div>

              <div className="data-products">
                {
                  cart && cart.map((item, i)=> (
                    <div className="card-product-cart" key={i}>
                      <div className="row no-gutters align-items-center py-4 ctn-card-product-cart">
                        <div className="col-2">
                          <img src={item.image} alt={item.title} />
                        </div>

                        <div className="col-6 pl-4">
                          <p className="card-product-cart__subtitle text-truncate" title={item.category}>{item.category}</p>
                          <h5 className="card-product-cart__title text-truncate" title={item.title}>{item.title}</h5>
                          <span className="color4 xs-bold">S/.{(item.price * item.quantity).toFixed(2)}</span>
                        </div>

                        <div className="col-3 pl-4">
                          <div className="ctn-quantity-cart d-flex">
                            <button type="button" className="btn btn--default" onClick={ ()=> handleChangeValueInputNumber(i, item.id, '-') }><i className="fa fa-minus"></i></button>
                            <input ref={el => refInputsNumber.current[i] = el} type="number" className="form-control mx-2 xs-center" value={item.quantity} onChange={ (e)=> handleUpdateFromCart(e, item.id) }/>
                            <button type="button" className="btn btn--default" onClick={ ()=> handleChangeValueInputNumber(i, item.id, '+')  }><i className="fa fa-plus"></i></button>
                          </div> 
                        </div>

                        <div className="col-1 xs-right">
                          <button type="button" className="btn btn--danger" onClick={ ()=> handleDeleteFromCart(item.id) }>
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                }

                {
                  cart.length == 0 ? <span className="d-block mt-4">Ningún producto en carrito</span> : null
                }
              </div>

              <br />
              <hr />

              <div className="d-flex">
                <div className="total-cart mt-2">
                  Total:&nbsp;<span className="color4 xs-bold">S/. {totalCart.toFixed(2)}</span>
                </div>
              </div>

            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="heading-section p-2 bg-white-light">
                <h5 className="xs-left dark-color">MIS DATOS</h5>
              </div>

              <div className="data-user mt-4">
                <form ref={refForm} onSubmit={handleSubmitForm}>
                  <div className="form-group">
                    <label className="color-label" htmlFor="name">NOMBRES Y APELLIDOS</label>
                    <input type="text" className="form-control theme-line" id="name" name="name" maxLength="150" required/>
                  </div>
                  <div className="form-group">
                    <label className="color-label" htmlFor="email">EMAIL</label>
                    <input type="text" className="form-control theme-line" id="email" name="email" maxLength="150" required/>
                  </div>
                  <div className="form-group">
                    <label className="color-label" htmlFor="telephone">TELÉFONO</label>
                    <input type="text" className="form-control theme-line" id="telephone" name="telephone" maxLength="9" required/>
                  </div>
                  <div className="form-group">
                    <label className="color-label" htmlFor="type_identity_document">TIPO DOCUMENTO</label>
                    <select className="form-control theme-line" defaultValue="" id="type_identity_document" name="type_identity_document" required>
                      <option value="">[Seleccione]</option>
                      <option value="DNI">DNI</option>
                      <option value="CARNET EXT">CARNET EXT</option>
                      <option value="RUC">RUC</option>
                      <option value="PASAPORTE">PASAPORTE</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="color-label" htmlFor="num_identity_document">NRO DOCUMENTO</label>
                    <input type="text" className="form-control theme-line" id="num_identity_document" name="num_identity_document" maxLength="15" required/>
                  </div>

                  <div className="form-group">
                    <label className="color-label" htmlFor="comment">COMENTARIO:</label>
                    <textarea className="form-control theme-line" rows="2" id="comment" name="comment" maxLength="300" required></textarea>
                  </div>

                  <div className="form-group mt-4">
                    <input className="styled-checkbox" id="cbx_terms" type="checkbox" name="check_terms" required/>
                    <label className="color-label" htmlFor="cbx_terms">
                      <div className="content text-terms">Acepto los&nbsp;<a className="link-underline" id="terms_escribenos" href="#">términos y condiciones</a>&nbsp;para el tratamiento de datos de parte de Importaciones La Guia.
                      </div>
                    </label>
                  </div>

                  <div className="form-group mt-4">
                    <button type="subtmit" className="btn btn--color1 color-black-force xs-bold">COTIZAR AHORA</button>
                  </div>
                </form>
              </div>
            </div>     
          </div>
        </div>
      </section>

      {
        loaderAjax ? <Preloader text_loading= {`Enviando...`}/> : null
      }

    </div>
  );
}

export default Quote;
