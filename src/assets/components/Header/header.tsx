import { NONAME } from "dns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";

import menuIcon from "../../images/vector/menu.svg";

import "./header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const token = localStorage.getItem("token");
  const _id = localStorage.getItem("_id");
  const [name, setName] = useState("");

  async function getData() {
    const response = await api.get(`/user-by-id/${_id}`);

    setName(response.data.name);
  }

  useEffect(() => {
    if (!token || !_id) {
      return;
    } else {
      getData();
    }
  }, []);

  return (
    <>
      <div className='header-mobile'>
        <button onClick={() => setOpenMenu(!openMenu)}>
          <img src={menuIcon} alt='botão menu' />
        </button>
        {openMenu ? (
          <div className='content-menu'>
            <Link to='/'>INICIO</Link>
            <Link to='/historia'>HISTORIA</Link>
            <Link to='/postagens'>POSTAGENS</Link>
            {token && _id ? (
              <Link to='/dashboard' className='ref-dashboard'>
                {name}
              </Link>
            ) : (
              <Link to='/login' className='ref-login'>
                LOGIN
              </Link>
            )}
          </div>
        ) : (
          <div className='content-exit'></div>
        )}
      </div>
      <div className='header-desktop'>
        <Link to='/'>INICIO</Link>
        <Link to='/historia'>HISTORIA</Link>
        <Link to='/postagens'>POSTAGENS</Link>
        {token && _id ? (
          <Link to='/dashboard' className='ref-dashboard'>
            {name}
          </Link>
        ) : (
          <Link to='/login' className='ref-login'>
            LOGIN
          </Link>
        )}
      </div>
    </>
  );
}

export default Header;
