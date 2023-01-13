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
      title: 'Projeto Arquitetônico',
      img: construcaoImg1,
      span: 'Tem um terreno vazio e gostaria de construir sua casa ou um comércio do zero? Esse serviço é para você.',
      span2: 'Vamos pensar em todo o funcionamento do espaço, como será o melhor layout, O posicionamento de cada ambiente, como será a fachada, onde irá ficar cada cômodo. Você terá uma casa funcional, ventilada e iluminada.',
      link: '/servicos/projeto-arquitetonico'
    },
    {
      title: 'Projeto Interiores',
      img: interioresImg3,
      span: 'A estrutura está pronta, agora é hora de pensarmos nos acabamentos, iluminação, móveis e etc.',
      span2: 'O projeto de interiores tem o poder de trazer vida e leveza para o seu espaço! Nele vamos te ajudar na escolha de acabamentos, bancadas, decorações, vamos desenhar os móveis, e deixar seu espaço lindo e aconchegante!',
      link: '/servicos/projeto-interiores'
    },
    {
      title: 'Projeto Reforma',
      img: reformaImg2,
      span: 'Você já tem um imóvel, mas não está satisfeito com o funcionamento dele. Os ambientes são pequenos demais, sem ventilação, iluminação, precisamos mudar isso!',
      span2: 'Nesse serviço também oferecemos reforma de fachadas. Vamos reformar e trazer mais qualidade de vida para você e sua família. Vamos começar essa transformação?',
      link: '/servicos/projeto-reforma'
    }
  ]

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
          {serviceCardT.map((el, index) => (
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
