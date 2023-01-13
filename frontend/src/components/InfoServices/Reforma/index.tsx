import './styles.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img1 from "../../../assets/img/reformarfrente.fw.webp";
import reformaFachada from "../../../assets/img/reforma-fachada-moderna-madeira-plantas.jpg";
import reformaCozinha from "../../../assets/img/reforma-cozinha-pequena-branca-mesa.jpg";
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
          <h2>Você tem um imóvel que não está satisfeito?</h2>
          <p>Se você está incomodado com o funcionamento do espaço, os acabamentos, a fachada, entre outras coisas, <strong>esse serviço é para você</strong>!
            <br />
            <br />
            No <strong>projeto de reforma</strong> vamos estudar seu imóvel para entender as melhorias que podemos fazer, juntamente com seus <strong>desejos e necessidades</strong> para o espaço e a partir disso elaborar um projeto sugerindo essas mudanças.
            <br />
            <br />

          </p>
        </motion.div>
        <img src={reformaFachada} alt="Antes e depois Fachada" />
      </div>
      <div className="comercial-text2 reforma3">
        <h6>Nosso objetivo é viabilizar as suas necessidades de acordo com o espaço já existente. </h6>
        <p>
          Desde mudanças mais complexas como estrutura, telhado, fachada, até mudanças menores como revestimentos, bancadas e móveis, o projeto de reforma vai <strong>transformar sua qualidade de vida</strong>.
          <br />
          <br />
          Buscamos atender todas as suas necessidades com o mínimo de intervenções possíveis. <strong>Vamos começar essa transformação?</strong>

        </p>
        <img src={reformaCozinha} alt="Antes e depois Cozinha" />
      </div>

      <div className="comercial-list-img reforma4">
        <ul className="comercial-container-list">

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Sem retrabalhos</p>
          </li>

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Mais facilidade</p>
          </li>

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Com suas necessidades</p>
          </li>

          <li className="comercial-list  ">
            <img src={Img5} alt="seta" />
            <p>Exclusivo</p>
          </li>

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Transformação</p>
          </li>

          <li className="comercial-list">
            <img src={Img5} alt="seta" />
            <p>Qualidade de vida</p>
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





    </div>

  )
}

export default Reforma;
