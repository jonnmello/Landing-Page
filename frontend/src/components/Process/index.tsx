import './styles.css';
import img1 from '../../assets/img/1.fw.png';
import img2 from '../../assets/img/2.fw.png';
import img3 from '../../assets/img/3.fw.png';
import img4 from '../../assets/img/4.fw.png';
import img5 from '../../assets/img/5.fw.png';
import img6 from '../../assets/img/6.fw.png';
import img7 from '../../assets/img/7.fw.png';
import ProcessCard from './ProcessCard';




const Process = () => {

  const processCardT = [
    {
      img: img1,
      span: 'Pagamento'
    },
    {
      img: img2,
      span: 'Cadastro'
    },
    {
      img: img3,
      span: 'Briefing'
    }
    ,
    {
      img: img4,
      span: 'Layout'
    }
    ,
    {
      img: img5,
      span: '3D'
    }
    ,
    {
      img: img6,
      span: 'Projeto'
    }
    ,
    {
      img: img7,
      span: 'Fornecedores'
    }
  ]

  return (

    <div className="process">
      <div className="process-text">
        <h4>COMO FUNCIONA O PASSO A PASSO PARA DESENVOLVIMENTO DO PROJETO</h4>
      </div>
      <div className="roww">
        {processCardT.map((el, index) => (

          <div className="" key={index}>
            <ProcessCard span={el.span} img={el.img} />
          </div>
        ))}
      </div>
    </div >
  )
}

export default Process;
