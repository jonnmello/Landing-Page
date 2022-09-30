import './styles.css';

import Img1 from "../../assets/img/jay1.fw.png";
import Img2 from "../../assets/img/email.svg";
import Img3 from "../../assets/img/instagram.svg";
import Img4 from "../../assets/img/whatsapp.svg";

const About = () => {


  return (

    <div className="about" id="about">
      <div className="about-img">
        <img src={Img1} alt="" />

      </div>
      <div className="about-container">
        <h1>Quem sou</h1>
        <span> Jayanne Mendes</span>
        <div className="about-text">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="about-rede">
          <h2>Confira minhas redes</h2>
          <div className="social-icon">
            <a href="mailto:jayarquiteta@gmail.com?subject=Preciso%20de%20ajuda"><img src={Img2} alt="Icon" /></a>
            <a href="https://www.instagram.com/jayarquiteta/" target="_blank"><img src={Img3} alt="Icon" /></a>
            <a href="https://api.whatsapp.com/send?phone=557193720605&text=Escrit%C3%B3rio%20Jay%20Mendes%20-%20Arquitetura%20e%20Interiores" target="_blank"><img src={Img4} alt="Icon" /></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;
