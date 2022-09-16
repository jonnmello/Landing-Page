import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Projetos } from './components/Projetos';



function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Projetos />
    </>
  )
}

export default App;
