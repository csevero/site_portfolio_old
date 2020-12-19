import React from "react";
import Footer from "../../assets/components/Footer/footer";
import Header from "../../assets/components/Header/header";

import "./history.css";

export default function Historia() {
  return (
    <div id='content-history'>
      <Header />
      <div className='content-wrapper-history'>
        <h1 className='text-main'>Minha história</h1>
        <div className='box-texts'>
          <div className='text-1'>
            <p>
              Tudo começou no ensino médio, fiz ensino médio integrado ao
              técnico em redes de computadores, então desde o começou já tive
              contato com tecnologias que me ajudaram a querer ir cada vez mais
              fundo nessa área. Após me formar veio a Faculdade...{" "}
              <span>→</span>
            </p>
          </div>
          <div className='text-2'>
            <p>
              Na faculdade faço Gestão da Tecnologia da Informação, e novamente
              tive acesso a área da tecnologia e agora tive contato também com a
              programação e de cara já gostei do desafio que fui submetido,
              primeiro conheci o Java, depois banco de dados (SQL), depois HTML,
              CSS, JS, entre outras... <span>↓</span>
            </p>
          </div>
          <div className='text-3'>
            <p>
              Não aprendi nada afundo na faculdade a maioria dos conceitos que
              aprendi foi através da internet e cursos de programação, comecei a
              desenvolver aplicativos nativos para Android pelo Android Studio
              utilizando a linguagem JAVA, mas dei uma pausa quando conheci as
              tecnologias NodeJS, ReactJS e estou focado nelas, esse site está
              sendo desenvolvido com React e utilizará Node na parte de
              postagens... <span>←</span>
            </p>
          </div>
          <div className='text-4'>
            Quem me apresentou essa tecnologia foi o{" "}
            <a
              className='link-social-network'
              href='https://www.instagram.com/alemon_ice/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Rafael Dias
            </a>{" "}
            um amigo de longa data que está me ajudando a sempre aprender mais
            sobre a tecnologia. Agradeço a mim por estar sempre me motivando a
            continua firme nos objetivos e não deixar me desanimar com os
            problemas, também a minha família e amigos, especialmente ao{" "}
            <a
              className='link-social-network'
              href='https://www.instagram.com/matheus_9110/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Matheus
            </a>
            ,{" "}
            <a
              className='link-social-network'
              href='https://www.instagram.com/alemon_ice/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Rafael
            </a>
            ,{" "}
            <a
              className='link-social-network'
              href='https://www.instagram.com/douglasxmo/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Douglas
            </a>
            ,{" "}
            <a
              className='link-social-network'
              href='https://www.instagram.com/eriksevero/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Erik
            </a>
            ,{" "}
            <a
              className='link-social-network'
              href='https://www.facebook.com/brayan.martins.7946281'
              target='_blank'
              rel='noreferrer noopener'
            >
              Brayan
            </a>
            ,{" "}
            <a
              className='link-social-network'
              href='https://www.facebook.com/felipe.barrosvarjao'
              target='_blank'
              rel='noreferrer noopener'
            >
              Felipe
            </a>
            ,{" "}
            <a
              className='link-social-network'
              href='https://www.instagram.com/axell.rocha/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Axel
            </a>
            ,{" "}
            <a
              className='link-social-network'
              href='https://www.instagram.com/ci.c.ro/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Cicero
            </a>{" "}
            e minha namorada{" "}
            <a
              className='link-social-network'
              href='https://www.instagram.com/julliana.olvr/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Juliana
            </a>
            .
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
