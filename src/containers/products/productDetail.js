import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { useParams } from "react-router-dom";

// redux
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@actions/cartActions';

// api
import { getProductDetail } from "@scripts/api/products";

// containers
import Error404 from "@containers/Error404";

// components
import ItemCardProduct from "@application/Products/ItemCardProduct";
import Preloader from "@commons/Preloader";

function CategoryProducts(){

  const { id_product: param_id_product } = useParams();
  const [ productDetail, setProductDetail ] = useState(null);

  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product));
  }

  useEffect(()=>{
    handleDetailProduct(param_id_product);
  },[param_id_product]);

  const handleDetailProduct = async (param_id_product) =>{
    const response = await getProductDetail(param_id_product);
    console.log(response);
    const dataProductDetail = (response.data ? response.data : {});
    setProductDetail(dataProductDetail);
  }

  if (productDetail === undefined) return <Error404/>;
  if (!productDetail) return <Preloader/>;


  return (
    <div className="product-detail">

      <div className="ctn-product-detail py-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 xs-mx-auto">
              <Breadcrumb className="breadcrumb-product-category">
                <BreadcrumbItem><Link to="/"><i className="fa fa-home"></i></Link></BreadcrumbItem>
                <BreadcrumbItem><Link className="text" to="/productos">Productos</Link></BreadcrumbItem>
                <BreadcrumbItem active><span className="text">{productDetail.title}</span></BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xl-10 xs-mx-auto">
              <div className="row">
                <div className="col-lg-5">
                  <img className="img-cover" src={productDetail.image} alt={productDetail.title}/>
                </div>
                <div className="col-lg-7">
                  <div className="ctn-title">
                    <h2 className="xs-left">{productDetail.title}</h2>
                  </div>

                  <div className="ctn-description mt-4">
                    <span>{productDetail.category}</span>
                    <br />
                    <span className="color4 xs-bold">S/. {productDetail.price.toFixed(2)}</span>
                    <br />
                    <br />
                    <p dangerouslySetInnerHTML={{__html: productDetail.description}} />
                  </div>

                  <div className="ctn-add-cart mt-4">
                    {
                      cart.find(item_cart=> item_cart.id == productDetail.id) ? 
                      <button type="button" className="btn btn--color2 color-black-force">AGREGADO</button> :
                      <button type="button" className="btn btn--dark-theme" onClick={ ()=> handleAddToCart(productDetail) }>AGREGAR</button>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
