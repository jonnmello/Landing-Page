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

          <p> <strong>Tem um terreno vazio</strong> para construir? Você precisa de um <strong>projeto arquitetônico!</strong> As plantas entregues nesse projeto são parte essencial para construção da sua <strong>casa ou comércio.</strong>
            <br />
            <br />
            Com o projeto em mãos para construir é possível <strong>reduzir problemas na obra, retrabalho e desperdício de materiais.</strong> O projeto será o mapa que te guiará ao seu destino final que é a sua <strong>casa dos sonhos.</strong></p>
        </motion.div>
        <img src={arquitetonicoFachada} alt="Fachada casa moderna projetada" />
      </div>
      <div className="comercial-text2">
        <h6>Investir em um projeto arquitetônico garante qualidade, segurança e funcionalidade!</h6>
        <p>
          Os nossos diferenciais na elaboração de um projeto arquitetônico são uma <strong>análise detalhada </strong>dos fatores climáticos que afetarão a construção, como sol, ventos, juntamente com a atenção aos <strong>desejos e necessidades</strong> dos nossos clientes para imprimir a <strong>sua personalidade na residência</strong>.
          <br />
          <br />O <strong>valor do projeto</strong> é uma porcentagem pequena em relação ao custo total de uma obra e sem dúvidas é o serviço que fará a  <strong>maior diferença</strong> para a concretização do seu sonho. <strong>Vamos juntos?</strong>
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
    </div>

  )
}

export default Arquitetonico;
