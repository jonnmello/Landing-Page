import './styles.css';
import ServicesCard from './ServicesCard';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import dbService from '../../shared/dbService';


const Services = () => {
  const data = dbService;
  const initial = {
    y: 40,
    opacity: 0,

  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,

      });
    }
  }, [inView, animation]);



  return (

    <div className="services">
      <div className="services-container" id="service" ref={ref}>
        <div className="services-title">
          <h2>Conheça um pouco mais sobre o nosso trabalho e solicite um orçamento.</h2>
          <p>Esta em dúvida em qual serviço contratar?

            <br />
            Confira abaixo qual serviço encaixa na sua necessidade: </p>
        </div>
        <div className="services-row">
          {data.serviceCardT.map((el, index) => (
            <motion.div className="services-plancontainer"
              initial={initial}
              animate={animation}
              transition={{ delay: 0.2, duration: 0.6 + index * 0.7 }}
              key={index}>
              <ServicesCard title={el.title} span={el.span} span2={el.span2} img={el.img} link={el.link} />
            </motion.div>
          ))}

        </div>
      </div >
    </div>
  )
}

export default Services;
