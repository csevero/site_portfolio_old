import React, { FormEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import Header from "../../components/Header/header";
import Button from "../../components/Button/button";
import Modal from "../../components/Modal/modal";
import Input from "../../components/Input/input";

import "./dashboard.css";

interface IUser {
  _id: string;
  name: string;
  email: string;
}

export default function Dashboard() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const _id = localStorage.getItem("_id");

  const [data, setData] = useState<IUser[]>([]);
  const [modal, setModal] = useState<Boolean>(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function getData() {
    await api
      .get(`/user-by-id/${_id}`)
      .then((response) => {
        setData([response.data]);
      })
      .catch(() => {
        alert("Erro para capturar os dados");
      });
  }

  useEffect(() => {
    if (!token || !_id) {
      alert("Falha na autenticação");
      history.push("/login");
    } else {
      getData();
    }
  }, [token, _id]);

  if (!data) {
    return (
      <div>
        <h1>CARREGANDO...</h1>
      </div>
    );
  }

  async function userUpdate(e: FormEvent) {
    e.preventDefault();
    const values = { name, email, pass };
    await api
      .put(`/user-update/${_id}`, values, {
        headers: { Authorization: token },
      })
      .then(() => {
        alert("Dados atualizado com sucesso");

        setName("");
        setEmail("");
        setPass("");
        setModal(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Erro na autenticação, faça o login novamente");
          localStorage.removeItem("token");
          localStorage.removeItem("_id");
          history.push("/login");
        } else {
          alert("Erro para atualização");
        }
      });
  }

  async function deleteUser() {
    if (window.confirm("Realmente deseja excluir o cadastro?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("_id");
      await api
        .delete(`/user-delete/${_id}`, { headers: { Authorization: token } })
        .then(() => {
          alert("Cadastro excluído com sucesso!");
        })
        .catch(() => {
          alert("Erro durante exclusão do cadastro");
        });

      history.push("/");
    }
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
                <Button onClick={() => setModal(!modal)}>
                  Atualizar seu cadastro{" "}
                </Button>

                <Link to='/criar-post'>
                  <Button>Fazer uma postagem</Button>
                </Link>

                <Button onClick={logoutUser}>Deslogar</Button>

                <Button onClick={deleteUser} backgroundColor="var(--color-danger)">
                  Deletar Cadastro{" "}
                </Button>
              </div>
              {modal ? (
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
                      <Button type='submit'>Atualizar</Button>
                      <Button
                        onClick={() => setModal(!modal)}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
