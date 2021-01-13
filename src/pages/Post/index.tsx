import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import Header from "../../components/Header/header";
import LinkAnchor from "../../components/LinkAnchor/linkAnchor";

import "./post.css";
import ButtonBack from "../../components/ButtonBack/buttonBack";

interface IPostProps {
  title: string;
  subject: string;
  category_project: {
    nameCategory: string;
  };
  user: {
    name: string;
    email: string;
  };
}

interface IPostParams {
  id: string;
}

export default function Post() {
  const params = useParams<IPostParams>();
  const [post, setPost] = useState<IPostProps[]>([]);

  useEffect(() => {

    async function getPost() {
      await api
        .get(`/project-by-id/${params.id}`)
        .then((response) => {
          setPost([response.data]);
        })
        .catch((err) => {
          console.log(err.response);
          alert("Erro para carregar post");
        });
    }

    getPost();
  }, []);

  return (
    <div id='content-main'>
      <Header />
      <ButtonBack link='/postagens' />
      <div className='content-wrapper-post'>
        {post.map((postInfo) => {
          return (
            <div className='post-content'>
              <section className='top'>
                <h1>{postInfo.title}</h1>
              </section>
              <p dangerouslySetInnerHTML={{ __html: postInfo.subject }} />
              <p className='text-secundary'>
                <span>Criador:</span> {postInfo.user.name}
              </p>
              <p className='text-secundary'>
                <span>Categoria:</span> {postInfo.category_project.nameCategory}
              </p>
              <br />
              <LinkAnchor link={`mailto:${postInfo.user.email}`}>
                Entrar em contato com criador
              </LinkAnchor>
            </div>
          );
        })}
      </div>
    </div>
  );
}
