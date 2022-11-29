import './styles.css';
import { init } from 'ityped';
import seta from '../../assets/img/seta.fw.png';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';


const Home = () => {

  const initial = {
    x: 10,
    opacity: 0,

  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const textRef = useRef(null);

  useEffect(() => {
    init(textRef?.current as unknown as Element, {
      backDelay: 1200,
      showCursor: true,
      typeSpeed: 250,
      strings: [
        "Você",
        "sua Família",
        "seu Negócio",
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
          transition={{ delay: 0.2, duration: 0.9 }}>
          <h4>O melhor lugar do mundo é aquele pensado pra <span ref={textRef} ></span></h4>
        </motion.div>

        <motion.div
          className="home-context"
          initial={initial}
          animate={animation}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          <h1>
            <strong>Escritório de arquitetura e interiores</strong> com atendimento presencial em <strong>Cansanção-BA e região</strong>.
            <br />
            <br />
            Também a distância <strong>onde você estiver!</strong>
          </h1>
        </motion.div>
      </div>
    </div >
  )
}

export default Home;
