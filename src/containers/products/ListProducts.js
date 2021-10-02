import React, { useEffect, useState } from "react";
import { urlStorage } from '@scripts/config';

// api
// import { getMenusOffers } from "@scripts/api/menus";
import { getProducts } from "@scripts/api/products";

// components
import ItemCardProduct from "@application/Products/ItemCardProduct";
import Preloader from "@commons/Preloader";

function ListProducts(){

  const [ products, setProducts] = useState(null);

  useEffect(()=>{
    handleListProducts();
  },[]);

  const handleListProducts = async () =>{
    const response= await getProducts();
    setProducts(response.data);
  }

  if (!products) return <Preloader/>;

  return (
    <div className="product-offers">

      <section className="section product-offers-banner bg-shadow bg-center bg-color-black">

        <div className="container">
          <div className="row mt-xl-4 mb-xl-2">
            <div className="col-12 xs-mx-auto color-white">
              <div className="row">
                <div className="col-12 heading-section">
                  <h2 className="mt-3 xs-center">NUESTROS PRODUCTOS</h2>
                </div>
              </div>
            </div>     
          </div>
        </div>

      </section>

      <section className="product-offers-list">
        <div className="container-fluid">
          <div className="row mt-5 mb-4">
            <div className="col-xl-8 xs-mx-auto">
              <div className="row equal">
                {
                  products && products.map((item, i)=> (
                    <div className="col-6 col-md-4 col-xxxl-3 mb-4" key={i}>
                      <ItemCardProduct 
                          className="card-product-offers"
                          product={item}
                        />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ListProducts;
