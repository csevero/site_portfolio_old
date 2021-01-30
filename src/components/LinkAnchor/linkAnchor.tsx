import React, { AnchorHTMLAttributes } from "react";

import "./linkAnchor.css";

interface ILinkAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
}

const LinkAnchor: React.FC<ILinkAnchor> = ({ link, children, ...rest }) => {
  return (
    <a
      href={link}
      {...rest}
      target='_blank'
      rel='noreferrer noopener'
      className='link-anchor'
    >
      {children}
    </a>
  );
};

export default LinkAnchor;