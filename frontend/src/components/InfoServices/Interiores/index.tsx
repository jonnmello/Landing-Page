import './styles.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImgTop from "../../../assets/img/desenho-interior-casa.png";
import interiorQuarto from "../../../assets/img/interior-quarto-grande.webp";
import interiorCozinha from "../../../assets/img/interior-cozinha-preta-pequena.webp";
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

          <p>Sua casa com sua <strong>personalidade em todos os detalhes</strong>.

            Nesse serviço pensamos no piso, forro, pintura, iluminação, pontos hidráulicos, pontos elétricos e bancadas, também faremos todo desenho de móveis para que eles sejam funcionais e modernos.
            <br />
            <br />
            Além disso <strong>auxiliamos na escolha</strong> de todos os outros móveis, como sofá, poltronas, mesas e também na decoração, como tapetes, cortinas, quadros, espelhos, papel de parede e etc.</p>
        </motion.div>
        <img src={interiorQuarto} alt="Quarto clean grande" />
      </div>
      <div className="comercial-text2 interior3">
        <h6>Nesse serviço, sua casa fica pronta para morar, linda, confortável e muito aconchegante! </h6>
        <p>
          Muitas pessoas acham que colocando o mármore mais caro, vai fazer toda a diferença e a casa vai ficar linda, mas não é o material mais caro que vai deixar sua casa elegante, mas sim a harmonia entre todos os materiais e escolhas. Isso só um <strong>bom projeto de interiores</strong> pode te proporcionar.


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
            <p>Em todos detalhes</p>
          </li>

          <li className="comercial-list">
            <img src={ImgSeta} alt="seta" />
            <p>Sem dor de cabeça</p>
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


    </div>

  )
}

export default Interiores;
