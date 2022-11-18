import './styles.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img1 from "../../assets/img/jayarquiteta-escritorio.png";

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Comercial = () => {

  const initial = {
    y: -30,
    opacity: 0

  };

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1
      });

    }
  }, [inView, animation]);


  return (

    <div className="comercial-ct">
      <div className="comercial-container">
        <div className="teste">
          <h1>Comercial</h1>
          <h2>vamos laa</h2>
        </div>
        <h3>asdasdsadasdasasasasasasasasasasasasasasas</h3>
        <h4>asdsdd</h4>
        <Link to="/" >
          teste
        </Link>

      </div>
    </div>

  )
}

export default Comercial;
