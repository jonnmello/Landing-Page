import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Process from './components/Process';
import { Projetos } from './components/Projetos';



function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Projetos />
      <Process />
    </>
  )
}

export default App;
