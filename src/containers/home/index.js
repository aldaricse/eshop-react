import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import history from '@scripts/history';
// api

// components
import Preloader from "@commons/Preloader";

function Home(){

  useEffect(()=>{
    history.push(`/productos`);
  },[]);
  
  return (
    <div className="home">
    </div>
  );
}

export default Home;
