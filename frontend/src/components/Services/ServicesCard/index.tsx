import { motion } from 'framer-motion';

type Props = {
  title: string,
  img: string,
  span: string,
  span2: string,
  link: string
}


const ServicesCard = ({ title, img, span, link, span2 }: Props) => {


  return (



    <div className="services-planinfocontainer">
      <h5>{title}</h5>
      <div className="services-img">
        <img src={img} alt="" />
      </div>
      <p>{span}</p>
      <p>{span2}</p>
      <div className="services-button">
        <a href={link} target="_parent"> <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>SAIBA MAIS</motion.button></a>
      </div>
    </div>


  )
}

export default ServicesCard;
