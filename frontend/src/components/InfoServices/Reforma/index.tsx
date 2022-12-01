import './styles.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img1 from "../../../assets/img/reformarfrente.fw.webp";
import reformaFachada from "../../../assets/img/reforma-fachada-moderna-madeira-plantas.webp";
import reformaCozinha from "../../../assets/img/reforma-cozinha-pequena-branca-mesa.webp";
import reformaEconomica from "../../../assets/img/reforma-economica.webp";
import Img5 from "../../../assets/img/seta1.fw.png";
import { useEffect } from 'react';


const Reforma = () => {

  const initial = {
    y: -30,
    opacity: 0

  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1
      });

    }
  }, [inView, animation]);


  return (

    <div className="comercial-ct reforma1" ref={ref}>
      <motion.div
        className="comercial-container"
        initial={initial}
        animate={animation}
        transition={{ delay: 0.2, duration: 0.9 }}>
        <img src={Img1} alt="Desenho Casa" />
        <div className="comercial-title reforma2">
          <h1> PROJETO REFORMA</h1>
          <p>Vamos deixar do seu jeito</p>
        </div>
      </motion.div>
      <div className="comercial-text">

        <motion.div
          className="comercial-text-h"
          initial={{
            y: -20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          <h2>Transformação é aqui</h2>
          <p>Você tem uma casa, um comércio, um espaço, um ambiente que não está satisfeito?
            <br />
            <br />
            tem muitas coisas que te incomodam, como por exemplo: a estrutura, o funcionamento, o piso, a fachada, entre outras coisas?
            <br />
            <br />
            Vamos te ajudar!
          </p>
        </motion.div>
        <img src={reformaFachada} alt="Antes e depois Fachada" />
      </div>
      <div className="comercial-text2 reforma3">
        <h6>Com o objetivo de viabilizar as suas necessidades de acordo com o espaço já existente. </h6>
        <p>
          Podendo ser desde um projeto mais complexo com demolições e construções de novas paredes ou algo mais básico como troca de piso, alteração de bancada, mobiliarios e etc.

        </p>
        <img src={reformaCozinha} alt="Antes e depois Cozinha" />
      </div>

      <div className="comercial-list-img reforma4">
        <ul className="comercial-container-list">

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Ergonomia</p>
          </li>

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Mais conforto</p>
          </li>

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Para suas necessidades</p>
          </li>

          <li className="comercial-list  ">
            <img src={Img5} alt="seta" />
            <p>Totalmente personalizado</p>
          </li>

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Projetos descomplicados</p>
          </li>

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Sem retrabalhos</p>
          </li>
        </ul>
        <div className="comercial-img-text">
          <img src={reformaEconomica} alt="Reforma" />
          <p>Mãos a obra!</p>
        </div>
      </div>
      <div className="comercial-button">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScyEZKIhv3xQfktNcCZUdUZ1BlO2pUvsRVxeyBdmxSVXXYH8Q/viewform" target=" _blank">  <button>
          FAÇA UM ORÇAMENTO AGORA!
        </button>  </a>
      </div>
      <div className="comercial-final">
        <p>Cada um dos projetos de arquitetura residencial tem sua particularidade e desafio. Portanto, reformar e/ou decorar um apartamento por conta própria pode muitas vezes causar transtornos e dor de cabeça e até mesmo encarecer ainda mais a obra.
          <br /><br />
          A ajuda profissional pode ser um fator decisivo para as boas escolhas. É fato que algumas pessoas podem dar conta sozinho em uma empreitada na hora de reformar ou decorar uma casa mas com certeza vão deixar de ter outros afazeres por se preocupar com algo em que não são profissionais.
          <br /><br />
          Contar com ajuda com um escritório de arquitetura pode ser decisivo para as boas escolhas. É muito comum as pessoas terem algum retrabalho na obra ou fazer compras equivocadas na decoração quando não se tem a ajuda de um profissional especializado.</p>
      </div>
      <div className="comercial-button">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScyEZKIhv3xQfktNcCZUdUZ1BlO2pUvsRVxeyBdmxSVXXYH8Q/viewform" target=" _blank">  <button>
          ORÇAMENTO
        </button>  </a>
      </div>



    </div>

  )
}

export default Reforma;
