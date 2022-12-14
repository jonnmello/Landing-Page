import './styles.css';
import { Col } from "react-bootstrap";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  alt: string;
}


export const ProjectCard = ({ title, description, imgUrl, alt }: Props) => {
  return (
    <Col className="jcenter" size={12} sm={6} md={4} >
      <div className="proj-imgbx">
        <img src={imgUrl} alt={alt} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
