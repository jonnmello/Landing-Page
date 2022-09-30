import './styles.css';
import { init } from 'ityped';
import seta from '../../assets/img/seta.fw.png';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';


const Home = () => {

  const initial = {
    x: 40,
    opacity: 0,

  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

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

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,

      });
    }
  }, [inView, animation]);

  return (
    <div className="home-img" id="home" ref={ref}>
      <div className="home-container">
        <motion.div
          className="home-text"
          initial={initial}
          animate={animation}
          transition={{ delay: 0.2, duration: 0.6 }}>
          <h4>O melhor lugar do mundo é aquele pensado pra <span ref={textRef} ></span></h4>
        </motion.div>

        <motion.div
          className="home-context offset-md-2"
          initial={initial}
          animate={animation}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
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
        </motion.div>
      </div>
    </div >
  )
}

export default Home;
