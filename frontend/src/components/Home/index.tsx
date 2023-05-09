import './styles.css';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';


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
      typeSpeed: 180,
      strings: [
        "você!",
        "sua família!",
        "seu negócio!",
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
            <strong>Escritório de arquitetura e interiores</strong> com atendimento em Conceição do Coité, Senhor do Bonfim, SantaLuz, Euclides da Cunha, Quijingue, Cansanção e regiões.

          </h1>
          <div className="home-button">
            <a href="service" >
              <Link to='service' spy={true} smooth={true} offset={-100} duration={900} >
                <button>
                  <strong>ORÇAMENTOS</strong>
                </button></Link>
            </a>
          </div>
        </motion.div>
      </div>
    </div >
  )
}

export default Home;
