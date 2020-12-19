import React from "react";

import gitIcon from "../../images/vector/git.svg";
import instaIcon from "../../images/vector/insta.svg";
import whatsIcon from "../../images/vector/whats.svg";
import linkIcon from "../../images/vector/linke.svg";

import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <h1>Fale comigo através dos canais abaixo</h1>
      <div className='social-networks-footer'>
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
      <p>Carlos, 2020 ©</p>
    </div>
  );
}

export default Footer;
