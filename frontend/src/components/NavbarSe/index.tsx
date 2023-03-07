
import './styles.css';
import 'bootstrap/js/src/collapse.js';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';


const NavbarSe = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primaryy">
      <div className="navbar-container container-fluid">

        <a href="link" className="navbar-logo">
          <NavLink to="/"> <h4 >JAY MENDES</h4>
            <span>ARQUITETURA & INTERIORES</span></NavLink>
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
          <ul className="navbar-nav offset-md-2 main-menu2">
            <li className="nav-item">
              <a href="https://jayarquiteta.com.br/"> <NavLink to="/">PROJETOS</NavLink></a>
            </li>
            <li className="nav-item">
              <a href="https://jayarquiteta.com.br/"><NavLink to="/" className="visible-xs">SOBRE</NavLink></a>
            </li>
            <li className="nav-item">
              <a href="https://jayarquiteta.com.br/"> <NavLink to="/" >CONTATO</NavLink></a>
            </li>
            <li className="nav-item">
              <a href="https://jayarquiteta.com.br/"> <NavLink to="/">ORÇAMENTO</NavLink></a>
            </li>
          </ul>
        </div>
        <div className="navbar-img">

          <a href="/"> <NavLink to="/"><img src={logo} alt="Icon" /> </NavLink></a>

        </div>
      </div>
    </nav>
  )
}

export default NavbarSe;
