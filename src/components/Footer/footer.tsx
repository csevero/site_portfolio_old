import React from "react";

import gitIcon from "../../assets/images/vector/git.svg";
import instaIcon from "../../assets/images/vector/insta.svg";
import whatsIcon from "../../assets/images/vector/whats.svg";
import linkIcon from "../../assets/images/vector/linke.svg";

import LinkAnchor from "../LinkAnchor/linkAnchor";
import "./footer.css";

function Footer() {
  return (
    <div className='footer'>
      <h1>Fale comigo através dos canais abaixo</h1>
      <div className='social-networks-footer'>
        <LinkAnchor link='https://www.instagram.com/carlosedu156/'>
          <img src={instaIcon} alt='icone instagram' />
        </LinkAnchor>
        <LinkAnchor link='https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!'>
          <img src={whatsIcon} alt='icone whatsapp' />
        </LinkAnchor>
        <LinkAnchor link='https://www.linkedin.com/in/carlos-severo-634271162/'>
          <img src={linkIcon} alt='icone linkedin' />
        </LinkAnchor>
        <LinkAnchor link='https://github.com/kissinger156'>
          <img src={gitIcon} alt='icone github' />
        </LinkAnchor>
      </div>
      <p>Carlos, 2020 ©</p>
    </div>
  );
}

export default Footer;
