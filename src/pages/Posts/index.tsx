import React, { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import api from "../../services/api";

import "./posts.css";
import Arrow from "../../assets/images/vector/arrow-white.svg";
import { Link } from "react-router-dom";

/*
Interface criada para acessar toda response que a api nos retornará, como estamos usando typescript, e vamos ter no retorno 1 array dentro de outro, para acessarmos a informação dele, dentro da interface, fazemos dessa forma como abaixo, na 'raiz' do response, você captura os dados normalmente, agora para acessar os dados dos outros arrays, é necessário criar também nas props um outro array contido na 'raiz'
*/
interface IPostProps {
  _id: string;
  title: string;
  subject: string;
  user: {
    name: string;
  };
  category_project: {
    nameCategory: string;
  };
}

interface ICategoryProps {
  _id: string;
  nameCategory: string;
}

export default function Posts() {
  const [postData, setPostData] = useState<IPostProps[]>([]);
  const [categoryData, setCategoryData] = useState<ICategoryProps[]>([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    async function getData() {
      await api.get("/project-list-all").then((response) => {
        setPostData(response.data);
      });

      await api.get("/category-list-all").then((response) => {
        setCategoryData(response.data);
      });
    }

    getData();
  }, []);

  async function listByCategory() {
    categoryId === ""
      ? await api.get("/project-list-all").then((response) => {
          setPostData(response.data);
        })
      : await api.get(`/project-by-category/${categoryId}`).then((response) => {
          setPostData(response.data);
        });
  }

  return (
    <div id='content-main'>
      <Header />
      <div className='content-wrapper-posts'>
        <h1 className="title-main">Veja todos post ou liste pela categoria</h1>
        <div className='search'>
          <select
            name='category'
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value=''>Listar todos</option>
            {categoryData.map((category) => {
              return (
                <option key={category._id} value={category._id}>
                  {category.nameCategory}
                </option>
              );
            })}
          </select>
          <img src={Arrow} alt='icone buscar' onClick={listByCategory} />
        </div>
        {postData.map((post) => {
          return (
            <div key={post._id} className='post-preview'>
              <Link
                to={`/postagem/${post.category_project.nameCategory}/${post._id}`}
              >
                <h1>{post.title}</h1>
                {/*tag abaixo é para que o navegador consiga 'transpilar' uma string para HTML, fazendo com que entenda suas tags, etc.*/}
                <p dangerouslySetInnerHTML={{ __html: post.subject }} className='subject-preview' />
                <p className='text-secundary'>
                  <span>Criador:</span> {post.user.name}
                </p>
                <p className='text-secundary'>
                  <span>Categoria:</span> {post.category_project.nameCategory}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
