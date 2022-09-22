import './styles.css';

import Img1 from "../../assets/img/serv1.fw.png";
import Img2 from "../../assets/img/serv2.fw.png";
import Img3 from "../../assets/img/serv3.fw.png";

const Services = () => {


  return (

    <div className="services">
      <div className="services-container">
        <div className="services-title">
          <h2>Nossos Serviços</h2>
          <p>Conheça nossos serviços principais Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </p>
        </div>
        <div className="services-row">
          <div className="services-plancontainer">
            <div className="services-planinfocontainer">
              <h4>Comercial</h4>
              <div className="services-img">
                <img src={Img1} alt="" />
              </div>
              <p>Projetos inteligentes para o seu negócio. Projetamos edifícios e estruturas de uso comercial, com o objetivo criar ambientes atrativos e funcionais para melhorar a experiência de compra dos consumidores.</p>
              <div className="services-button">
                <button>ORÇAMENTO</button>
              </div>
            </div>
          </div>
          <div className="services-plancontainer">
            <div className="services-planinfocontainer">
              <h4>Residencial</h4>
              <div className="services-img">
                <img src={Img2} alt="" />
              </div>
              <p>Projetos bem solucionados e criativos para sua casa. Alinhamos custo, benefício, estética e funcionalidade para os ambientes projetados, de acordo com as necessidades e desejos apresentados pelo cliente.</p>
              <div className="services-button">
                <button>ORÇAMENTO</button>
              </div>
            </div>
          </div>
          <div className="services-plancontainer">
            <div className="services-planinfocontainer">
              <h4>Comercial</h4>
              <div className="services-img">
                <img src={Img3} alt="" />
              </div>
              <p>Projetar ambientes através da arte, decoração, psicologia das cores e funcionalidade dos espaços. Estudamos, planejamos e projetamos ambientes internos do seu negócio e do seu lar.  </p>
              <div className="services-button">
                <button>ORÇAMENTO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Services;