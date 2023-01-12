import './styles.css';

import logo from '../../assets/img/logo.png';
import Img4 from "../../assets/img/whatsapp.svg";
import email from '../../assets/img/email.svg';
import loca from '../../assets/img/location.svg';
import insta from '../../assets/img/instagram.svg';

const Footer = () => {



  return (
    <div className="footer">
      <div className="footer-1">
        <div className="footer-top">
          <img src={logo} alt="Jayanne Arquiteta" />
          <h1>JAYANNE MENDES</h1>
        </div>
        <p>
          Atuando nas regiões  de <strong>Cansanção - Monte santo - Euclides da Cunha - Quijingue - Capim Grosso - SantaLuz - Conceição do Coité - Salvador</strong> e MUNDO.
          <br />
        </p>
      </div>
      <div className="footer-2">
        <div className="footer-2-content1">
          <img src={loca} alt="Cansanção" />
          <div className="footer-2-content1-text">
            <h2>Endereço</h2>
            <p>R. Sra. Santana, N°5 - centro - Cansanção - BA, 48840-000</p>
          </div>
        </div>
        <div className="footer-2-content1">
          <img src={Img4} alt="Whatsapp" />
          <div className="footer-2-content1-text">
            <h2>Whatsapp</h2>
            <p>(71) 9 9372-0605</p>
          </div>
        </div>
        <div className="footer-2-content1-1">
          <img src={email} alt="Email" />
          <div className="footer-2-content1-text">
            <h2>E-mail</h2>
            <p>Jayarquiteta@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-3">
        <h1>Contatos</h1>
        <div className="social-icon1">
          <a href="mailto:jayarquiteta@gmail.com?subject=Preciso%20de%20ajuda"><img src={email} alt="Email" /></a>
          <a href="https://www.instagram.com/jayarquiteta/" target="_blank"><img src={insta} alt="Instagram JayArquiteta" /></a>
          <a href="https://api.whatsapp.com/send?phone=557193720605&text=Escrit%C3%B3rio%20Jay%20Mendes%20-%20Arquitetura%20e%20Interiores" target="_blank"><img src={Img4} alt="Whatsapp" /></a>
        </div>
      </div>
    </div>


  )
}

export default Footer;
