import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Projetos } from './components/Projetos';
import Services from './components/Services';



function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Projetos />
      <Services />
      <About />
    </>
  )
}

export default App;
