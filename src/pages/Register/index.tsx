import React, { FormEvent, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../../assets/components/Button/button";
import Header from "../../assets/components/Header/header";
import Input from "../../assets/components/Input/input";

import api from "../../services/api";

import "./register.css";

export default function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const values = { name, email, pass };

    api
      .post("/user-create", values)
      .then(() => {
        alert("O cadastro foi criado com sucesso!");

        history.push("/login");
      })
      .catch(() => {
        alert("Erro para fazer o cadastro");
      });
  }
  return (
    <div id='content-main'>
      <Header />
      <div className='content-wrapper-register'>
        <form onSubmit={handleSubmit} className='register-user'>
          <fieldset>
            <legend>Dados</legend>

            <div className='input-block'>
              <label htmlFor='name'>Nome</label>
              <Input
                type='text'
                id='name'
                required
                pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <Link to='/login'>
              Já possui cadastro? Clique aqui para fazer login
            </Link>
            <Button type='submit'>CADASTRAR</Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
