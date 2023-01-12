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

        <h1>Quem sou</h1>
        <span> Jayanne Mendes</span>
        <div className="about-text">
          <p>
            <strong> - Arquiteta e Urbanista
              <br />
              - Especialista em Designer de Interiores</strong>
            <br />
            <br />

            O escritório Jayanne Mendes apresenta soluções inteligentes que resultam em ambientes funcionais, com <strong>design e estilo</strong>, sempre ligado nas inovações em materiais e tendências, para oferecer o que há de mais <strong>atual</strong> a seus clientes.
            <br />
            <br />
            Idealizamos um projeto que tenha o melhor <strong>aproveitamento de espaço</strong>, no melhor custo benefício dos materiais e acabamentos utilizados, dentro do orçamento acordado.
            Assim é possível concretizar os sonhos dentro da <strong>realidade e necessidade do cliente</strong>.
            <br />
            <br />
            Atuando nas regiões  de <strong>Cansanção - Monte santo - Euclides da Cunha - Quijingue - Capim Grosso - SantaLuz - Conceição do Coité - Salvador</strong> e mundo.
            <br />

          </p>
        </div>
        <div className="about-rede">
          <h2>Confira meus contatos</h2>
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
