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
      span: 'O serviço que você precisa para você construir sua casa ou seu comércio do zero. Você tem um terreno vazio e gostaria de um projeto pra pensarmos em todo o funcionamento do espaço, onde irá ficar posicionada cada ambiente, como será a fachada, onde irá ficar cada cômodo, cada porta e janela? Esse serviço é pra você.',
      link: '/servicos/projeto-arquitetonico'
    },
    {
      title: 'Projeto Interiores',
      img: interioresImg3,
      span: 'A estrutura está pronta, agora você precisa de um projeto para a parte interna dos ambientes, seja comerciais ou residências, esse projeto tem o poder de trazer vida pro seu espaço! nele vamos te ajudar na escolha de acabamentos, iluminação, vamos desenhar os móveis, as bancadas e deixar seu espaço aconchegante!',
      link: '/servicos/projeto-interiores'
    },
    {
      title: 'Projeto Reforma',
      img: reformaImg2,
      span: 'Você já tem um imóvel, seja casa ou comércio, mas não está satisfeito com o funcionamento dele. ambientes pequenos demais, sem ventilação, iluminação, precisamos mudar isso! nesse serviço também oferecemos reforma de fachadas. vamos reformar e trazer mais qualidade de vida pra você e sua família.',
      link: '/servicos/projeto-reforma'
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
