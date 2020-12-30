import React, { useEffect, useState } from "react";
import Header from "../../assets/components/Header/header";
import api from "../../services/api";

import "./posts.css";

interface IPostProps {
  title: string;
  subject: string;
}

interface ICategoryProps {
  nameCategory: string;
}

interface IUserProps {
  name: string;
}

export default function Posts() {
  const [postData, setPostData] = useState<IPostProps[]>([]);
  const [categoryData, setCategoryData] = useState<ICategoryProps[]>([]);
  const [userData, setUserData] = useState<IUserProps[]>([]);

  useEffect(() => {
    async function getData() {
      await api.get("/project-list-all").then((response) => {
        setPostData(response.data);
      });
    }

    getData();
  }, []);

  return (
    <div id='content-main'>
      <Header />
      <div className='content-wrapper-posts'>
        <h1>Desenvolvendo...</h1>
      </div>
    </div>
  );
}
