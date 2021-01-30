import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/button";
import Header from "../../components/Header/header";

import "./notFound.css";

export default function NotFound() {
  return (
    <div id='content-main'>
      <Header />
      <div className='content-wrapper-not-found'>
        <h1>Ops... Rota desconhecida</h1>
        <h2>
          Verifique o link que você acessou, ou navegue pelo menu para ir para
          uma rota existente, obrigado! =D
        </h2>
        <Link to='/'>
          <Button>Ir para o início</Button>
        </Link>
      </div>
    </div>
  );
}
