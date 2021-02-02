import React from 'react';
import Header from '../../components/Header/header';

import gitIcon from '../../assets/images/vector/git.svg';
import instaIcon from '../../assets/images/vector/insta.svg';
import whatsIcon from '../../assets/images/vector/whats.svg';
import linkIcon from '../../assets/images/vector/linke.svg';
import mailIcon from '../../assets/images/vector/mail1.svg';

import LinkArchor from '../../components/LinkAnchor/linkAnchor';

import './contact.css';

interface ILinkNetworkProps {
  link: string;
  imgSrc: string;
  about: string;
}

const LinkNetwork: React.FC<ILinkNetworkProps> = ({ link, imgSrc, about }) => {
  return (
    <LinkArchor link={link}>
      <div className="social">
        <img src={imgSrc} alt={`icone ${imgSrc}`} />
        <p>{about}</p>
      </div>
    </LinkArchor>
  );
};

export default function Contact() {
  return (
    <div id="content-main">
      <Header />
      <div className="content-wrapper-contact">
        <h1>Contato</h1>
        <p>
          Falar comigo não será um problema, estou sempre conectado 😄. Escolha
          uma das formas abaixo e vamos se conectar!
        </p>
        <div className="social-networks">
          <LinkNetwork
            link="mailto:severo.e.carlos@gmail.com?subject=Olá Carlos&body=Escreva sua mensagem aqui ou abaixo"
            imgSrc={mailIcon}
            about="severo.e.carlos@gmail.com"
          />
          <LinkNetwork
            link="https://www.instagram.com/carlosedu156/"
            imgSrc={instaIcon}
            about="@Carlosedu156"
          />
          <LinkNetwork
            link="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!"
            imgSrc={whatsIcon}
            about="+5515996605712"
          />
          <LinkNetwork
            link="https://www.linkedin.com/in/carlos-severo-634271162/"
            imgSrc={linkIcon}
            about="Carlos Severo"
          />
          <LinkNetwork
            link="https://github.com/kissinger156"
            imgSrc={gitIcon}
            about="kissinger156"
          />
        </div>
      </div>
    </div>
  );
}
