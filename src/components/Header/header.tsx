import React, { useState } from "react";
import { Link } from "react-router-dom";

import menuIcon from "../../assets/images/vector/menu.svg";

import "./header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <div className='header-mobile'>
        <button onClick={() => setOpenMenu(!openMenu)}>
          <img src={menuIcon} alt='botão menu' />
        </button>
        {openMenu ? (
          <div className='content-menu'>
            <Link to='/'>INICIO</Link>
            <Link to='/sobre-mim'>HISTORIA</Link>            
          </div>
        ) : (
          <div className='content-exit'></div>
        )}
      </div>
      <div className='header-desktop'>
        <Link to='/'>INICIO</Link>
        <Link to='/sobre-mim'>HISTORIA</Link>
      </div>
    </>
  );
}

export default Header;
