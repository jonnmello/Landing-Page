import './styles.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImgTop from "../../../assets/img/desenho-interior-casa.png";
import interiorQuarto from "../../../assets/img/interior-quarto-grande.png";
import interiorCozinha from "../../../assets/img/interior-cozinha-preta-pequena.png";
import interiorPlantas from "../../../assets/img/interior-plantas.webp";
import ImgSeta from "../../../assets/img/seta1.fw.png";
import { useEffect } from 'react';


const Interiores = () => {

  const initial = {
    x: -30,
    opacity: 0

  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1
      });

    }
  }, [inView, animation]);


  return (

    <div className="comercial-ct interior1" ref={ref}>
      <motion.div
        className="comercial-container"
        initial={initial}
        animate={animation}
        transition={{ delay: 0.2, duration: 0.9 }}>
        <img src={ImgTop} alt="Desenho interior" />
        <div className="comercial-title interior2">
          <h1> PROJETO INTERIORES</h1>
          <p>Conforto e qualidade para o seu lar</p>
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
          <h2>Sua casa em todos os detalhes</h2>
          <p>Nesse serviço além de pensarmos no piso, forro, pintura, iluminação, pontos hidráulicos, pontos elétricos e bancadas, também faremos todo desenho de móveis (sim, desenhamos todos os móveis planejados pra que fiquem bem modernos, atuais e funcionais).
            <br />
            <br />
            Além disso auxiliamos na escolha de todos os outros móveis, como sofá, poltronas, mesas e também na decoração, como tapetes, cortinas, quadros, espelhos, papel de parede e etc.</p>
        </motion.div>
        <img src={interiorQuarto} alt="Quarto clean grande" />
      </div>
      <div className="comercial-text2 interior3">
        <h6>Nesse serviço, sua casa fica pronta para morar, linda, confortável e muito aconchegante! </h6>
        <p>
          Muitas pessoas ignoram esse serviço pois vêem a possibilidade da contratação de um arquiteto como um gasto a mais.
          <br />
          <br />No entanto, o que elas não sabem é que esse profissional sabe fazer todos os cálculos para evitar desperdício em todas as etapas da obra.
          Começando inclusive pela análise do terreno para garantir que o projeto seja elaborado de acordo com suas imperfeições.
        </p>
        <img src={interiorCozinha} alt="Cozinha pequena preta e cinza" />
      </div>

      <div className="comercial-list-img interior4">
        <ul className="comercial-container-list">

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Ergonomia</p>
          </li>

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Mais conforto</p>
          </li>

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Para suas necessidades</p>
          </li>

          <li className="comercial-list  ">
            <img src={ImgSeta} alt="seta" />
            <p>Totalmente personalizado</p>
          </li>

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Projetos descomplicados</p>
          </li>

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Sem retrabalhos</p>
          </li>
        </ul>
        <div className="comercial-img-text">
          <img src={interiorPlantas} alt="Interior Plantas" />
          <p>Ideal para você!</p>
        </div>
      </div>
      <div className="comercial-button">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSchctltvQQUoNZQK5wdibhsvElqRZhel7Co0cIGbhm1wVm_zQ/viewform" target=" _blank">  <button>
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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSchctltvQQUoNZQK5wdibhsvElqRZhel7Co0cIGbhm1wVm_zQ/viewform" target=" _blank">  <button>
          ORÇAMENTO
        </button>  </a>
      </div>



    </div>

  )
}

export default Interiores;
