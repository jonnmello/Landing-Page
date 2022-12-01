import './styles.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImgTop from "../../../assets/img/desenho-arquitetonico.png";
import arquitetonicoFachada from "../../../assets/img/projeto-arquitetonico-residencial-esquina.webp";
import arquitetonicoFachadaModerna from "../../../assets/img/projeto-arquitetonico-fachada-grande.webp";
import ImgCasa from "../../../assets/img/casa-do-seu-jeito.webp";
import ImgSeta from "../../../assets/img/seta1.fw.png";
import { useEffect } from 'react';


const Arquitetonico = () => {

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

    <div className="comercial-ct" ref={ref}>
      <motion.div
        className="comercial-container"
        initial={initial}
        animate={animation}
        transition={{ delay: 0.2, duration: 0.9 }}>
        <img src={ImgTop} alt="Desenho arquitetônico" />
        <div className="comercial-title">
          <h1> PROJETO ARQUITETÔNICO</h1>
          <p>Transforme sua residência em referência conceitual</p>
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
          <h2>Terreno vazio pra construir?</h2>
          <p>Você precisa de um projeto arquitetônico! As plantas entregues nesse projeto são parte essencial para construção da sua casa ou comércio.
            <br />
            <br />
            Com eles em mãos você constroi sem imprevistos, seguindo o planejamento feito no projeto, é possível reduzir problemas como atraso na entrega da obra, retrabalho e desperdícios de materiais, por exemplo.</p>
        </motion.div>
        <img src={arquitetonicoFachada} alt="Fachada casa moderna projetada" />
      </div>
      <div className="comercial-text2">
        <h6>Investir em um projeto arquitetônico garante qualidade, segurança e funcionalidade!</h6>
        <p>
          Muitas pessoas ignoram esse serviço pois vêem a possibilidade da contratação de um arquiteto como um gasto a mais.
          <br />
          <br />No entanto, o que elas não sabem é que esse profissional sabe fazer todos os cálculos para evitar desperdício em todas as etapas da obra.
          Começando inclusive pela análise do terreno para garantir que o projeto seja elaborado de acordo com suas imperfeições.
        </p>
        <img src={arquitetonicoFachadaModerna} alt="Fachada residencial grande moderna" />
      </div>

      <div className="comercial-list-img">
        <ul className="comercial-container-list">

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Facilidade</p>
          </li>

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Tudo dentro do seu orçamento</p>
          </li>

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Satisfação garantida</p>
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
          <img src={ImgCasa} alt="Sua casa do seu jeito!" />
          <p>Do seu jeito!</p>
        </div>
      </div>
      <div className="comercial-button">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe44VaIEZypA8uXB1pVSSgxRE2gHxnp6KFw9aYAENgleqe2Kg/viewform" target=" _blank">  <button>
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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe44VaIEZypA8uXB1pVSSgxRE2gHxnp6KFw9aYAENgleqe2Kg/viewform" target=" _blank">  <button>
          ORÇAMENTO
        </button>  </a>
      </div>



    </div>

  )
}

export default Arquitetonico;
