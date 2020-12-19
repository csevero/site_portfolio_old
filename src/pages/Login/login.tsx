import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../assets/components/Header/header";
import api from "../../services/api";

import "./login.css";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    const values = { email, password };

    await api
      .post("/user-login", values)
      .then((response) => {
        const { token } = response.data;
        const { _id } = response.data.response;
        localStorage.setItem("token", token);
        localStorage.setItem("_id", _id);

        history.push("/dashboard");
      })
      .catch((err) => {
        alert("Email ou senha incorreta");
        console.log(err);
      });
  }
  return (
    <div id='content-login'>
      <Header />
      <div className='content-wrapper-login'>
        <form onSubmit={handleLogin} className='login-user'>
          <fieldset>
            <legend>Login</legend>
            <div className='input-block'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-block'>
              <label htmlFor='pass'>Senha</label>
              <input
                type='password'
                id='pass'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link
              to='/login'
              onClick={() =>
                alert("opa, estamos trabalhando nisso ainda, aguarde =D")
              }
            >
              Esqueci minha senha
            </Link>
            <Link
              to='/cadastro'
            >
              Quero me cadastrar
            </Link>
            <button type='submit'>LOGIN</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
