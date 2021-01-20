import React, { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import api from "../../services/api";

import "./posts.css";
import Arrow from "../../assets/images/vector/arrow-white.svg";
import { Link } from "react-router-dom";

import { IPostProps } from "../../interfaces/post.interface";
import { ICategoryProps } from "../../interfaces/category.interface";
import { getAllPosts } from "../../services/post.services";
import { getAllCategories } from "../../services/category.services";

export default function Posts() {
  const [postData, setPostData] = useState<IPostProps[]>([]);
  const [categoryData, setCategoryData] = useState<ICategoryProps[]>([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    (async () => {
      const postResponse = await getAllPosts();
      const categoryResponse = await getAllCategories();

      setPostData(postResponse);
      setCategoryData(categoryResponse);
    })();
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
        <h1 className='title-main'>Veja todos post ou liste pela categoria</h1>
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
                <p
                  dangerouslySetInnerHTML={{ __html: post.subject }}
                  className='subject-preview'
                />
                <br />
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
