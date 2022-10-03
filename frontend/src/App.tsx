import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Projetos } from './components/Projetos';
import Services from './components/Services';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />

    </>
  )
}

export default App;
