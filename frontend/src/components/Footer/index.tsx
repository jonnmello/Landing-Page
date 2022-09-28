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
          <img src={logo} alt="" />
          <h1>JAYANNE MENDES</h1>
        </div>
        <p>A arquitetura é a arte que determina a identidade do nosso tempo e melhora a vida das pessoas.</p>
      </div>
      <div className="footer-2">
        <h1>Dúvidas? Entre em contato comigo</h1>
        <div className="footer-2-content1">
          <img src={loca} alt="" />
          <div className="footer-2-content1-text">
            <h2>Endereço</h2>
            <p>R. Sra. Santana, N°5 - centro - Cansanção - BA, 48840-000</p>
          </div>
        </div>
        <div className="footer-2-content1">
          <img src={Img4} alt="" />
          <div className="footer-2-content1-text">
            <h2>Whatsapp</h2>
            <p>(71) 9 9372-0605</p>
          </div>
        </div>
        <div className="footer-2-content1-1">
          <img src={email} alt="" />
          <div className="footer-2-content1-text">
            <h2>E-mail</h2>
            <p>Jayarquiteta@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-3">
        <h1>Contatos</h1>
        <div className="social-icon1">
          <a href="#"><img src={email} alt="Icon" /></a>
          <a href="#"><img src={insta} alt="Icon" /></a>
          <a href="#"><img src={Img4} alt="Icon" /></a>
        </div>
      </div>
    </div>


  )
}

export default Footer;
