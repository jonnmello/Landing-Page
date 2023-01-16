import dbImages from "./dbImages"

const img = dbImages;
const serviceCardT = [
    {
      title: 'Projeto Arquitetônico',
      img: img.construcaoImg1,
      span: 'Tem um terreno vazio e gostaria de construir sua casa ou um comércio do zero? Esse serviço é para você.',
      span2: 'Vamos pensar em todo o funcionamento do espaço, como será o melhor layout, O posicionamento de cada ambiente, como será a fachada, onde irá ficar cada cômodo. Você terá uma casa funcional, ventilada e iluminada.',
      link: '/servicos/projeto-arquitetonico'
    },
    {
      title: 'Projeto Interiores',
      img: img.interioresImg3,
      span: 'A estrutura está pronta, agora é hora de pensarmos nos acabamentos, iluminação, móveis e etc.',
      span2: 'O projeto de interiores tem o poder de trazer vida e leveza para o seu espaço! Nele vamos te ajudar na escolha de acabamentos, bancadas, decorações, vamos desenhar os móveis, e deixar seu espaço lindo e aconchegante!',
      link: '/servicos/projeto-interiores'
    },
    {
      title: 'Projeto Reforma',
      img: img.reformaImg2,
      span: 'Você já tem um imóvel, mas não está satisfeito com o funcionamento dele. Os ambientes são pequenos demais, sem ventilação, iluminação, precisamos mudar isso!',
      span2: 'Nesse serviço também oferecemos reforma de fachadas. Vamos reformar e trazer mais qualidade de vida para você e sua família. Vamos começar essa transformação?',
      link: '/servicos/projeto-reforma'
    }
  ]
export default {serviceCardT};
