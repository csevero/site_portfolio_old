import React, { FormEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import Header from "../../components/Header/header";
import Button from "../../components/Button/button";
import Modal from "../../components/Modal/modal";
import Input from "../../components/Input/input";

import { toast } from "react-toastify";
import { verifyAuthentication } from "../../utils/verifyAuthentication";

import { IUserProps } from "../../interfaces/user.interface";

import "./dashboard.css";

export default function Dashboard() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const _id = localStorage.getItem("_id");

  const [data, setData] = useState<IUserProps[]>([]);
  const [modalUpdate, setModalUpdate] = useState<Boolean>(false);
  const [modalPassword, setModalPassword] = useState<Boolean>(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    async function getData() {
      await api
        .get(`/user-by-id/${_id}`)
        .then((response) => {
          setData([response.data]);
          setEmail(response.data.email);
          setName(response.data.name);
        })
        .catch(() => {
          alert("Erro para capturar os dados");
        });
    }

    if (!token || !_id) {
      alert("Falha na autenticação");
      history.push("/login");
    } else {
      getData();
    }
  }, [token, _id, history]);

  async function userUpdate(e: FormEvent) {
    e.preventDefault();
    const values = { name, email };
    await api
      .put(`/user-update/${_id}`, values, {
        headers: { Authorization: token },
      })
      .then(() => {
        setModalUpdate(false);

        toast.success("Dados atualizado com sucesso");
      })
      .catch((err) => {
        verifyAuthentication(err.response.status);
      });
  }

  async function userUpdatePassword(e: FormEvent) {
    e.preventDefault();

    await api
      .put(
        `user-update-password/${_id}`,
        { pass },
        {
          headers: { Authorization: token },
        }
      )
      .then(() => {
        setPass("");
        setModalPassword(false);
        toast.success("Senha atualizada com sucesso!");
      })
      .catch((err) => {
        verifyAuthentication(err.response.status);
      });
  }

  function logoutUser() {
    if (window.confirm("Deseja fazer o logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("_id");
      history.push("/");
    }
  }

  return (
    <div id='content-main'>
      <Header />
      <div className='content-wrapper-dashboard'>
        {data.map((data) => {
          return (
            <div key={data._id}>
              <p>
                Olá <span>{data.name}</span>, obrigado por estar aqui, por ter
                feito o cadastro no meu site e agora estar lendo isso. Tudo isso
                que foi feito aqui foi para cada vez mais me mostrar que sou
                capaz e treinar meus conhecimentos sempre estar atualizado e
                antenado sobre as tecnologias de desenvolvimento.
              </p>
              <p>
                Para a construção desse site, foi utilizado as tecnologias
                ReactJS para parte de construção do site em si, CSS para parte
                de estilização e também para deixar responsivo, na parte de
                backend foi utilizado NodeJS e para armazenar os dados foi
                utilizado o MongoDB.
              </p>
              <p>
                Por enquanto os usuários não terão tantas funções dentro do
                site, mas com o passar do tempo irei implantando novas
                funcionalidades e trazendo novidades para vocês! Enquanto isso,
                veja minhas <Link to='/postagens'>Postagens</Link>, espero que
                gostem.
              </p>
              <p>Caso queira, você pode: </p>
              <div className='buttons'>
                <div className='update-buttons'>
                  <Button onClick={() => setModalUpdate(!modalUpdate)}>
                    Atualizar seu cadastro{" "}
                  </Button>
                  <Button onClick={() => setModalPassword(!modalPassword)}>
                    Atualizar sua senha{" "}
                  </Button>
                </div>

                <Link to='/criar-post'>
                  <Button>Fazer uma postagem</Button>
                </Link>

                <Button onClick={logoutUser}>Deslogar</Button>
              </div>
              {modalUpdate ? (
                <Modal>
                  <form onSubmit={userUpdate} className='update-user'>
                    <fieldset>
                      <legend>Atualize seus dados</legend>
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
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <Button type='submit'>Atualizar</Button>
                      <Button
                        onClick={() => setModalUpdate(!modalUpdate)}
                        backgroundColor='var(--color-danger)'
                      >
                        Cancelar
                      </Button>
                    </fieldset>
                  </form>
                </Modal>
              ) : (
                <div className='saida-modal'> </div>
              )}
              {modalPassword ? (
                <Modal>
                  <form onSubmit={userUpdatePassword} className='update-user'>
                    <fieldset>
                      <legend>Atualize sua senha</legend>
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
                      <Button type='submit'>Atualizar</Button>
                      <Button
                        onClick={() => setModalPassword(!modalPassword)}
                        backgroundColor='var(--color-danger)'
                      >
                        Cancelar
                      </Button>
                    </fieldset>
                  </form>
                </Modal>
              ) : (
                <div className='saida-modal'></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
