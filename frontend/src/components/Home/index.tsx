import './styles.css';
import { init } from 'ityped';
import seta from '../../assets/img/seta.fw.png';
import { useEffect, useRef, useState } from 'react';


const Home = () => {

  const textRef = useRef(null);

  useEffect(() => {
    init(textRef?.current as unknown as Element, {
      backDelay: 1200,
      showCursor: true,
      typeSpeed: 100,
      strings: [
        "Você",
        "Familia",
      ],
      placeholder: false,
    });
  }, []);

  return (
    <div className="home-img" id="home">
      <div className="home-container">
        <div className="home-text">
          <h4>O melhor lugar do mundo é aquele pensado pra <span ref={textRef} ></span></h4>
        </div>
        <div className="home-context offset-md-2">
          <div className="home-context-text">
            <img src={seta} alt="Seta" />
            <p>Projetos 100% online</p>
          </div>
          <div className="home-context-text">
            <img src={seta} alt="Seta" />
            <p>Projetos personalizados</p>
          </div>
          <div className="home-context-text">
            <img src={seta} alt="Seta" />
            <p>Veja seu ambiente em 3D</p>
          </div>
          <div className="home-context-text">
            <img src={seta} alt="Seta" />
            <p>Lista de todos os itens utilizados no projeto</p>
          </div>
        </div>


      </div>
    </div >
  )
}

export default Home;
