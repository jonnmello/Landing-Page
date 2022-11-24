import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Comercial from './components/InfoServices/Comercial';
import Interiores from './components/InfoServices/Interiores';
import Navbar from './components/Navbar';
import NavbarSe from './components/NavbarSe';
import { Projetos } from './components/Projetos';
import Services from './components/Services';

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
        <Footer />
      </Route>
      <Route path="/servicos/projeto-arquitetonico">
        <NavbarSe />
        <Comercial />
        <Footer />
      </Route>
      <Route path="/servicos/projeto-interiores">
        <NavbarSe />
        <Interiores />
        <Footer />
      </Route>
    </Switch>
  </BrowserRouter>


)



export default Routes;
