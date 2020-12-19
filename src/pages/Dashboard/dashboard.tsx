import React, { useEffect, useState } from "react";
import Header from "../../assets/components/Header/header";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

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
    const response = await api.get(`/user-by-id/${_id}`);

    await setData([response.data]);
  }

  useEffect(() => {
    if (!token || !_id) {
      alert("Falha na autenticação");
      history.push("/login");
    } else {
      getData();
    }
  }, [token, _id]);

  async function handleUpdate() {
    const values = { name, email, pass };
    await api
      .put(`/user-update/${_id}`, values, {
        headers: { Authorization: token },
      })
      .then(() => {
        alert("Dados atualizado com sucesso");
      })
      .catch((err) => {
        alert(err.data);
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
        .catch((err) => {
          alert(err.data);
        });

      history.push("/");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    history.push("/");
  }

  return (
    <div id='content-dashboard'>
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
                <button onClick={() => setModal(!modal)}>
                  Editar seu cadastro
                </button>
                <button onClick={deleteUser}>Excluir seu cadastro</button>
                <button onClick={logout}>Fazer Logout</button>
              </div>
              {modal ? (
                <div className='modal'>
                  <div className='content-modal'>
                    <form onSubmit={handleUpdate} className='update-user'>
                      <fieldset>
                        <legend>Atualize seus dados</legend>
                        <div className='input-block'>
                          <label htmlFor='name'>Nome</label>
                          <input
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
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                          />
                        </div>
                        <button type='submit'>ATUALIZAR</button>
                        <button onClick={() => setModal(!modal)} type='button'>
                          CANCELAR
                        </button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
