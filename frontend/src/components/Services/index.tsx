import './styles.css';
import construcaoImg1 from "../../assets/img/contrucao-projeto.png";
import reformaImg2 from "../../assets/img/reforma-arquitetonico-residencia.png";
import interioresImg3 from "../../assets/img/interiores-projetos-decoracao.png";
import ServicesCard from './ServicesCard';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';


const Services = () => {

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

  const serviceCardT = [
    {
      title: 'Construção',
      img: construcaoImg1,
      span: 'Projetos inteligentes para o seu negócio. Projetamos edifícios e estruturas de uso comercial, com o objetivo criar ambientes atrativos e funcionais para melhorar a experiência de compra dos consumidores.',
      link: '/servicos/projeto-arquitetonico'
    },
    {
      title: 'Interiores',
      img: interioresImg3,
      span: 'Projetos bem solucionados e criativos para sua casa. Alinhamos custo, benefício, estética e funcionalidade para os ambientes projetados, de acordo com as necessidades e desejos apresentados pelo cliente.',
      link: '/servicos/projeto-interiores'
    },
    {
      title: 'Reforma',
      img: reformaImg2,
      span: 'Projetar ambientes através da arte, decoração, psicologia das cores e funcionalidade dos espaços. Estudamos, planejamos e projetamos ambientes internos do seu negócio e do seu lar.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScyEZKIhv3xQfktNcCZUdUZ1BlO2pUvsRVxeyBdmxSVXXYH8Q/viewform'
    }
  ]

  return (

    <div className="services">
      <div className="services-container" id="orcamento" ref={ref}>
        <div className="services-title">
          <h2>Nossos Serviços</h2>
          <p>Conheça nossos serviços principais Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </p>
        </div>
        <div className="services-row">
          {serviceCardT.map((el, index) => (
            <motion.div className="services-plancontainer"
              initial={initial}
              animate={animation}
              transition={{ delay: 0.2, duration: 0.6 + index * 0.7 }}
              key={index}>
              <ServicesCard title={el.title} span={el.span} img={el.img} link={el.link} />
            </motion.div>
          ))}

        </div>
      </div >
    </div>
  )
}

export default Services;
