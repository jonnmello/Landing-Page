import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Comercial from './components/InfoServices/Comercial';
import Navbar from './components/Navbar';
import { Projetos } from './components/Projetos';
import Services from './components/Services';

const Routes = () => (

  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
        <Projetos />
        <About />
        <Contact />
        <Services />
        <Footer />
      </Route>
      <Route path="/projetos-comercial-servicos">
        <Comercial />
      </Route>
    </Switch>
  </BrowserRouter>


)



export default Routes;
