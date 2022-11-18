import './styles.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img1 from "../../assets/img/jayarquiteta-escritorio.png";

import { useEffect } from 'react';

const Construtivo = () => {

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

    <div className="about" id="about" ref={ref}>

    </div>

  )
}

export default Construtivo;
