import React from "react";
import { Switch } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import RouteApp from './RouteApp';

// containers
import Error404 from "@containers/Error404";
import Home from "@containers/home";
import ListProducts from "@containers/products/ListProducts";
import ProductDetail from "@containers/products/productDetail";
import Quote from "@containers/quote";

function ReactRouter(){

	return (
    <HelmetProvider>
      <Switch>
        <RouteApp exact path="/" component={ Home } />
        <RouteApp exact path="/productos" component={ ListProducts } />
        <RouteApp exact path="/productos/:id_product" component={ ProductDetail } />
        <RouteApp exact path="/cotizar" component={ Quote } />
        <RouteApp component={ Error404 } />
      </Switch>
    </HelmetProvider>
	);
}

export default ReactRouter;