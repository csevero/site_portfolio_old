import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/header";
import addIcon from "../../assets/images/vector/add.svg";
import "./createPost.css";

import api from "../../services/api";
import Button from "../../components/Button/button";
import { FormEvent } from "react";
import Modal from "../../components/Modal/modal";
import ButtonBack from "../../components/ButtonBack/buttonBack";

interface ICategoryProject {
  _id: string;
  nameCategory: string;
}

export default function CreatePost() {
  const history = useHistory();

  const token = localStorage.getItem("token");
  const _id = localStorage.getItem("_id");

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [data, setData] = useState<ICategoryProject[]>([]);

  const [modal, setModal] = useState<Boolean>(false);
  const [nameCategory, setNameCategory] = useState("");

  useEffect(() => {
    async function getData() {
      await api
        .get("/category-list-all")
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          alert(err.response.data.error);
        });
    }

    if (!token || !_id) {
      alert("Falha na autenticação");
      history.push("/login");
    } else {
      getData();
    }
  }, [modal, token, _id]);

  async function createPost(e: FormEvent) {
    e.preventDefault();

    if (categoryId === "") {
      alert("Selecione uma categoria ou adicione uma compatível");
    } else {
      const values = { title, category_project: categoryId, subject };

      await api
        .post("/project-create", values, { headers: { Authorization: token } })
        .then(() => {
          alert("Post criado com sucesso!");

          setTitle("");
          setCategoryId("");
          setSubject("");

          history.push("/dashboard");
        })
        .catch((err) => {
          alert(err.response.data.error);
        });
    }
  }

  async function createCategory(e: FormEvent) {
    e.preventDefault();

    await api
      .post(
        "/category-create",
        { nameCategory },
        {
          headers: { Authorization: token },
        }
      )
      .then(() => {
        alert("Categoria criada com sucesso!");

        setNameCategory("");
        setModal(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Falha na autenticação, faça o login novamente");
          localStorage.removeItem("token");
          localStorage.removeItem("_id");
          history.push("/login");
        }
      });
  }

  return (
    <div id='content-main'>
      <Header />
      <ButtonBack link='/dashboard' />
      <div className='content-wrapper-create-post'>
        <h1>Faça uma nova publicação!</h1>

        <form className='create-post' onSubmit={createPost}>
          <fieldset>
            <legend>Dados para o post</legend>
            <div className='input-block'>
              <label htmlFor='title'>Título</label>
              <input
                name='title'
                type='text'
                required
                pattern="[A-Za-z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='input-block'>
              <label htmlFor='category_project'>Categoria</label>
              <div className='select'>
                <select
                  name='category_project'
                  required
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option hidden value=''>
                    Escolha uma categoria
                  </option>
                  {data.map((category) => {
                    return (
                      <option key={category._id} value={category._id}>
                        {category.nameCategory}
                      </option>
                    );
                  })}
                </select>
                <img
                  src={addIcon}
                  alt='adicionar nova categoria'
                  onClick={() => setModal(!modal)}
                />
              </div>
            </div>
            <div className='input-block'>
              <label htmlFor='subject'>Escreva seu post em detalhes</label>
              <textarea
                name='subject'
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <Button type='submit'>CADASTRAR</Button>
          </fieldset>
        </form>
      </div>
      {modal ? (
        <Modal>
          <form onSubmit={createCategory} className='create-category'>
            <legend>
              Adicione uma nova categoria
              <br />
              <span>Exemplo: Node, React, Mongodb</span>
            </legend>
            <div className='input-block'>
              <label htmlFor='nameCategory'>Nome da categoria</label>
              <input
                name='nameCategory'
                required
                pattern="[A-Za-z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+"
                type='text'
                value={nameCategory}
                onChange={(e) => setNameCategory(e.target.value)}
              />
              <Button type='submit'>SALVAR</Button>
              <Button onClick={() => setModal(false)} backgroundColor='#d90000'>
                CANCELAR
              </Button>
            </div>
          </form>
        </Modal>
      ) : (
        <div className='saida-modal'> </div>
      )}
    </div>
  );
}
