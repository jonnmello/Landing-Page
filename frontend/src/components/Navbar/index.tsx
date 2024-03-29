import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-scroll';
import logo from '../../assets/img/logo.png';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primaryy">
      <div className="navbar-container container-fluid">

        <a href="/" className="navbar-logo">
          <Link to='home' className="navbar-logo" spy={true} smooth={true} offset={-100} duration={700} > <h4 >JAY MENDES</h4>
            <span>ARQUITETURA & INTERIORES</span></Link>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li className="nav-item">
              <a href="project"> <Link to='project' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" spy={true} smooth={true} offset={-50} duration={700} >PROJETOS</Link></a>
            </li>
            <li className="nav-item">
              <a href="about"> <Link to='about' className="visible-xs" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" spy={true} smooth={true} offset={-70} duration={700} >SOBRE</Link></a>
            </li>
            <li className="nav-item">
              <a href="form"> <Link to='form' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" spy={true} smooth={true} offset={-60} duration={700} >CONTATO</Link></a>
            </li>
            <li className="nav-item">
              <a href="service"> <Link to='service' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" spy={true} smooth={true} offset={-100} duration={700} >ORÇAMENTO</Link></a>
            </li>
          </ul>
        </div>
        <div className="navbar-img">

          <a href="/"> <Link to='home' className="navbar-logo" spy={true} smooth={true} offset={-100} duration={700} ><img src={logo} alt="Icon" /></Link></a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;

