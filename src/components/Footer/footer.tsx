import React from 'react';

import gitIcon from '../../assets/images/vector/git.svg';
import instaIcon from '../../assets/images/vector/insta.svg';
import whatsIcon from '../../assets/images/vector/whats.svg';
import linkIcon from '../../assets/images/vector/linke.svg';

import LinkAnchor from '../LinkAnchor/linkAnchor';
import './footer.css';
interface INetworkLinkProps {
  link: string;
  imgSrc: string;
}

const LinkNetwork: React.FC<INetworkLinkProps> = ({ link, imgSrc }) => {
  return (
    <LinkAnchor link={link}>
      <img src={imgSrc} alt={`icone ${imgSrc}`} />
    </LinkAnchor>
  );
};

function Footer() {
  return (
    <div className="footer">
      <h1>Fale comigo através dos canais abaixo</h1>
      <div className="social-networks-footer">
        <LinkNetwork
          link="https://www.instagram.com/carlosedu156/"
          imgSrc={instaIcon}
        />
        <LinkNetwork
          link="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!"
          imgSrc={whatsIcon}
        />
        <LinkNetwork
          link="https://www.linkedin.com/in/carlos-severo-634271162/"
          imgSrc={linkIcon}
        />
        <LinkNetwork link="https://github.com/kissinger156" imgSrc={gitIcon} />
      </div>
      <p>Carlos, 2020 ©</p>
    </div>
  );
}

export default Footer;
