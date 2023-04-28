import './styles.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img1 from "../../assets/img/jayarquiteta-escritorio.webp";
import Img2 from "../../assets/img/email.svg";
import Img3 from "../../assets/img/instagram.svg";
import Img4 from "../../assets/img/whatsapp.svg";
import { useEffect } from 'react';

const About = () => {

  const initial = {
    y: -30,
    opacity: 0

  };

  let numero = 0;

  function aumentar() {
    numero++
    console.log("inst", numero)
  }


  const animation = useAnimation();
  const animation1 = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1
      });
      animation1.start({
        y: 0,
        opacity: 1
      });

    }
  }, [inView, animation]);


  return (

    <div className="about" id="about" ref={ref}>
      <motion.div className="about-img"
        initial={initial}
        animate={animation}
        transition={{ duration: 1.8 }}>
        <img src={Img1} alt="Jayanne arquiteta" />

      </motion.div>
      <motion.div className="about-container"
        initial={initial}
        animate={animation1}
        transition={{ duration: 2, delay: 0.7 }}>

        <h1>QUEM SOMOS</h1>

        <div className="about-text">
          <p>

            Somos um <strong>Escritório de Arquitetura e Design de Interiores</strong>, acreditamos que cada cliente é único e merece um <strong>projeto exclusivo e personalizado</strong>. Não seguimos uma fórmula padrão ou estilo pré-definido, pois sabemos que cada pessoa tem suas próprias preferências, necessidades e estilo de vida.
            <br />
            <br />
            Nosso objetivo é <strong>transformar ambientes</strong> em lugares que transmitam a essência e a identidade dos nossos clientes. Não importa se é uma residência, um espaço comercial ou um projeto de interiores, estamos sempre em busca de <strong>soluções criativas e personalizadas</strong> que deixem um legado duradouro e significativo na vida das pessoas.
            <br />
            <br />
            Atuando nas regiões  de <strong>Cansanção - Monte santo - Euclides da Cunha - Quijingue - Capim Grosso - SantaLuz - Conceição do Coité - Feira de santana - Salvador</strong> e mundo.
            <br />

          </p>
        </div>
        <div className="about-button">
          <a href="https://www.instagram.com/jayarquiteta/" onClick={aumentar} target=" _blank">  <button>
            <strong>ME SIGA NO INSTAGRAM!</strong>
          </button>  </a>
        </div>
        <div className="about-rede">
          <h2>CONTATOS</h2>
          <div className="social-icon">
            <a href="mailto:jayarquiteta@gmail.com?subject=Preciso%20de%20ajuda"><img src={Img2} alt="Email" /></a>
            <a href="https://www.instagram.com/jayarquiteta/" target="_blank"><img src={Img3} alt="Instagram" /></a>
            <a href="https://api.whatsapp.com/send?phone=557193720605&text=Escrit%C3%B3rio%20Jay%20Mendes%20-%20Arquitetura%20e%20Interiores" target="_blank"><img src={Img4} alt="Whatsapp" /></a>
          </div>
        </div>

      </motion.div>
    </div>

  )
}

export default About;
