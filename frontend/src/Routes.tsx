import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Arquitetonico from './components/InfoServices/Arquitetonico';
import Interiores from './components/InfoServices/Interiores';
import Reforma from './components/InfoServices/Reforma';
import Navbar from './components/Navbar';
import NavbarSe from './components/NavbarSe';
import { Projetos } from './components/Projetos';
import Services from './components/Services';
import Forms from './components/Forms/Forms';

const Routes = () => (

  <BrowserRouter>

    <Switch>
      <Route path="/" exact>
        <Navbar />
        <Home />
        <Projetos />
        <About />
        <Contact />
        <Services />
        <Forms />
        <Footer />
      </Route>
      <Route path="/orcamento">
        <Navbar />
        <Home />
        <Projetos />
        <About />
        <Contact />
        <Services />
        <Footer />
      </Route>
      <Route path="/servicos/projeto-arquitetonico" >
        <NavbarSe />
        < Arquitetonico />
        <Footer />
      </Route>
      <Route path="/servicos/projeto-interiores" >
        <NavbarSe />
        <Interiores />
        <Footer />
      </Route>
      <Route path="/servicos/projeto-reforma" >
        <NavbarSe />
        <Reforma />
        <Footer />
      </Route>
    </Switch>
  </BrowserRouter>


)



export default Routes;
