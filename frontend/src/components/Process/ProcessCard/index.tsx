import { ProcessCardT } from '../../../types/processCardT';
import './styles.css';

type Props = {
  img: string,
  span: string
}

const ProcessCard = ({ img, span }: Props) => {

  return (
    <>
      <div className="processCard">
        <div className="processCard-img">
          <img src={img} alt="" />

        </div>
        <div className="processCard-text">
          <span>{span}</span>
        </div>

      </div>
    </>
  )
}

export default ProcessCard;
