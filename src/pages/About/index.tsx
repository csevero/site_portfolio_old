import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import LinkAnchor from "../../components/LinkAnchor/linkAnchor";

import "./about.css";

export default function Historia() {
  return (
    <div id='content-main'>
      <Header />
      <div className='content-wrapper-history'>
        <h1 className='text-main'>Sobre mim</h1>
        <p></p>
      </div>
      <Footer />
    </div>
  );
}
