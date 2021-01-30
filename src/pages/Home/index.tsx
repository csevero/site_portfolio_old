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
        <h2>
          Programador Junior e nos tempos vagos motovlogger
        </h2>
        <div className="about-me">
          <h3>Me conheça melhor <br/>clicando abaixo</h3>
          <Link to="/sobre-mim">Sobre mim</Link>
        </div>
        <div className="social-networks">
          <LinkAnchor link="https://www.instagram.com/carlosedu156/">
            <img src={instaIcon} alt="icone instagram" />
          </LinkAnchor>
          <LinkAnchor link="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!">
            <img src={whatsIcon} alt="icone whatsapp" />
          </LinkAnchor>
          <LinkAnchor link="https://www.linkedin.com/in/carlos-severo-634271162/">
            <img src={linkIcon} alt="icone linkedin" />
          </LinkAnchor>
          <LinkAnchor link="https://github.com/kissinger156">
            <img src={gitIcon} alt="icone github" />
          </LinkAnchor>
        </div>
      </div>
    </div>
  );
}
