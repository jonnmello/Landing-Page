import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';


function App() {

  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  )
}

export default App;
