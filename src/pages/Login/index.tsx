import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../assets/components/Button/button";
import Header from "../../assets/components/Header/header";
import Input from "../../assets/components/Input/input";
import api from "../../services/api";

import "./login.css";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function userLogin(e: FormEvent) {
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
      .catch(() => {
        alert("Email ou senha incorreta");
      });
  }
  return (
    <div id='content-main'>
      <Header />
      <div className='content-wrapper-login'>
        <form onSubmit={userLogin} className='login-user'>
          <fieldset>
            <legend>Login</legend>
            <div className='input-block'>
              <label htmlFor='email'>Email</label>
              <Input
                type='email'
                id='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-block'>
              <label htmlFor='pass'>Senha</label>
              <Input
                type='password'
                id='pass'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link
              to='#'
              onClick={() =>
                alert("opa, estamos trabalhando nisso ainda, aguarde =D")
              }
            >
              Esqueci minha senha
            </Link>
            <Link
              onClick={() =>
                alert("opa, estamos trabalhando nisso ainda, aguarde =D")
              }
              to='#'
            >
              Quero me cadastrar
            </Link>
            <Button type='submit'>LOGIN</Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
