import React from 'react';

import { Link } from 'react-router-dom';

import rostoImg from '../../assets/images/perfil.png';

import gitIcon from '../../assets/images/vector/git.svg';
import instaIcon from '../../assets/images/vector/insta.svg';
import whatsIcon from '../../assets/images/vector/whats.svg';
import linkIcon from '../../assets/images/vector/linke.svg';

import './home.css';
import Header from '../../components/Header/header';
import LinkAnchor from '../../components/LinkAnchor/linkAnchor';

export default function Home() {
  return (
    <div id="content-main">
      <Header />
      <div className="content-wrapper-main">
        <img src={rostoImg} alt="fotoRosto" className="img-rosto" />
        <h1>Carlos Severo</h1>
        <h2>Programador Junior e nos tempos vagos motovlogger</h2>
        <div className="about-me">
          <h3>
            Me conheça melhor <br />
            clicando abaixo
          </h3>
          <Link to="/sobre-mim">Sobre mim</Link>
        </div>
      </div>
    </div>
  );
}
