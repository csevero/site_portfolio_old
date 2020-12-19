import React from "react";

import { Link } from "react-router-dom";

import rostoImg from "../../assets/images/perfil.png";

import gitIcon from "../../assets/images/vector/git.svg";
import instaIcon from "../../assets/images/vector/insta.svg";
import whatsIcon from "../../assets/images/vector/whats.svg";
import linkIcon from "../../assets/images/vector/linke.svg";

import "./home.css";
import Header from "../../assets/components/Header/header";
import Footer from "../../assets/components/Footer/footer";

export default function Home() {
  return (
    <div id='content-home'>
      <Header />
      <div className='content-main'>
        <img src={rostoImg} alt='fotoRosto' className='img-rosto' />
        <h1>Carlos Severo</h1>
        <div className='social-networks'>
          <a
            href='https://www.instagram.com/carlosedu156/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instaIcon} alt='icone instagram' />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={whatsIcon} alt='icone whatsapp' />
          </a>
          <a
            href='https://www.linkedin.com/in/carlos-severo-634271162/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkIcon} alt='icone linkedin' />
          </a>
          <a
            href='https://github.com/kissinger156'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={gitIcon} alt='icone github' />
          </a>
        </div>
      </div>
      <div className='content-sec'>
        <div className='box-text'>
          <div className='text-1'>
            <h1>Quem eu sou</h1>
            <p>
              Olá, sou o carlos, tenho 20 anos, sou apaixonado por tecnologias e
              programação e sempre estou buscando conhecer e aprender novos
              conceitos, com isso em mente, fazer uma biografia em forma de site
              seria uma boa forma de treinar! Espero que gostem, se quiser me
              conhecer melhor, acesse minha <Link to='/historia'>HISTÓRIA</Link>
            </p>
          </div>
          <div className='text-2'>
            <h1>Por que eu fiz esse site?</h1>
            <p>
              O objetivo inicial do site era apenas treinar minha habilidade de
              programação, mas decidi ir além e fazer semelhante a um ‘blog’
              onde estarei postando conteúdos sobre programação, design, dicas,
              etc. Então seguindo essa lógica pretendo estar sempre postando
              conteúdos mesmo que sejam 'basicos' mas que para mim seja algo
              útil. Espero poder te ajudar!{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
