import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../assets/components/Header/header";
import api from "../../services/api";

import "./post.css";

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
      <div className='content-wrapper-post'>
        {post.map((postInfo) => {
          return <h1>testinho</h1>;
        })}
      </div>
    </div>
  );
}
