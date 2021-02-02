import React, { useState } from 'react';
import repositories from '../../utils/repos.json';
import { AiOutlineYoutube } from 'react-icons/ai';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import './about.css';
import LinkAnchor from '../../components/LinkAnchor/linkAnchor';
import Button from '../../components/Button/button';
import { Link } from 'react-router-dom';
export interface IRepoProps {
  repositories: { name: string; description: string; url: string }[];
}

export default function About() {
  const [repos] = useState<IRepoProps>(repositories);

  return (
    <div id="content-main">
      <Header />
      <div className="content-wrapper-about">
        <h1 className="text-main">Sobre mim</h1>
        <p>
          Como já dito, me chamos Carlos, ah e antes de começar é um prazer te
          ter aqui visitando meu site 😊. Sou da cidade de Boituva, tive contato
          inicial com a tecnologia durante o ensino médio, onde fiz integrado ao
          técnico em redes de computadores.
        </p>
        <p>
          {' '}
          Após isso veio a faculdade onde fiz Gestão da Tecnologia da Informação
          e tive ainda mais contato e foi aí que decidi me aprofundar no assunto
          e dedicar meu tempo a aprender sobre programação 👨‍💻.
        </p>
        <p>
          Durante esse período tive contato com diversas linguagens de
          programação, mas atualmente estou dedicando meu tempo para aprimorar
          meus conhecimento em:
          <ul>
            <ul>
              Linguagens:
              <li>👉🏻 Typescript</li>
            </ul>
            <ul>
              Tecnologias:
              <li>👉🏻 ReactJS</li>
              <li>👉🏻 NodeJS</li>
            </ul>
            <ul>
              Estilização:
              <li>👉🏻 CSS3</li>
            </ul>
            <ul>
              Bancos de dados:
              <li>👉🏻 MongoDB</li>
              <li>👉🏻 Mysql</li>
            </ul>
          </ul>
        </p>
        <p style={{ width: '90vw' }}>
          Veja alguns dos meus projetos que estão publicados no meu github:
        </p>
        <div className="repos-preview">
          {repos.repositories.map((info, index) => {
            if (index <= 3) {
              return (
                <LinkAnchor link={`${info.url}`} className="post-link">
                  <div className="card-container">
                    <div className="card-content">
                      <h1>{info.name}</h1>
                      <p>{info.description}</p>
                    </div>
                  </div>
                </LinkAnchor>
              );
            }
            return null;
          })}
        </div>
        <LinkAnchor link="https://github.com/kissinger156?tab=repositories">
          <Button> Ver mais</Button>
        </LinkAnchor>

        <p>
          Além da programação sou apaixonado por motos e até tenho um canal no
          Youtube onde sempre que eu tenho tempo eu posto vídeos lá, os assuntos
          que eu abordo são sobre motos ou qualquer outro que eu goste e que eu
          acho que pode ajudar outras pessoas. Caso queira conhecer meu canal,
          clique no ícone: <br />
          <LinkAnchor
            link="https://www.youtube.com/channel/UCFcuIk6AjU_eiLZaTjJA8kA"
            style={{ width: '50px' }}
          >
            <AiOutlineYoutube size={'46px'} color={'#ff0000'} />
          </LinkAnchor>
        </p>
        <p style={{ marginTop: '-10px' }}>
          Para entrar em contato comigo, utilize os icones que estão no rodapé
          da página, ou então vá para página de contato{' '}
          <Link to="/contato">clicando aqui</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
