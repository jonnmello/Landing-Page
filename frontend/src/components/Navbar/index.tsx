import './styles.css';
import 'bootstrap/js/src/collapse.js';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primaryy">
      <div className="navbar-container container-fluid">
        <a href="link" className="navbar-logo">
          <h4 >JAYANNE MENDES</h4>
          <span>ARQUITETURA & INTERIORES</span>
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
            <li>
              <a href="#about" className="active">SOBRE</a>
            </li>
            <li>
              <a href="#project">PROJETOS</a>
            </li>
            <li>
              <a href="#orcamento">ORÇAMENTO</a>
            </li>
            <li>
              <a href="#form">CONTATO</a>
            </li>
          </ul>
        </div>
        <div className="navbar-img">
          <a href="/"><img src={logo} alt="Icon" /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

