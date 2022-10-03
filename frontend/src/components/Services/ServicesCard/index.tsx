import { motion } from 'framer-motion';

type Props = {
  title: string,
  img: string,
  span: string,
  link: string
}


const ServicesCard = ({ title, img, span, link }: Props) => {


  return (



    <div className="services-planinfocontainer">
      <h4>{title}</h4>
      <div className="services-img">
        <img src={img} alt="" />
      </div>
      <p>{span}</p>
      <div className="services-button">
        <a href={link} target=" _blank"> <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>ORÇAMENTO</motion.button></a>
      </div>
    </div>


  )
}

export default ServicesCard;
