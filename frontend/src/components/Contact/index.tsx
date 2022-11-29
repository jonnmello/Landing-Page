
import { FiHelpCircle } from 'react-icons/fi';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { Collapse } from 'react-collapse';
import { useState } from 'react';
import './styles.css';
import Forms from '../Forms/Forms';




const Contact = () => {

  const [questions, setQuestions] = useState([

    {
      index: 0,
      isOpened: false,
      title: 'Qual a vantagem de contratar a Jay Arquiteta?',
      answer:
        'A list of questions and answers relating to a particular subject, especially one giving basic information for users of a website.',
    },
    {
      index: 1,
      isOpened: false,
      title: 'Quanto custa o m²?',
      answer:
        'Nós não cobramos por m² pois cada projeto requer uma necessidade e um grau de dificuldade diferente, não achamos justo ter um preço fixo para diferentes serviços, por isso nosso orçamento é personalizado.',
    },
    {
      index: 2,
      isOpened: false,
      title: 'Como funciona o projeto a distância?',
      answer:
        'O projeto a distância funciona da mesma forma que o presencial, a diferença é que não vou tirar as medidas pessoalmente, mas vou te direcionar para pegar as informações que preciso, as etapas continuam da mesma forma, faremos reuniões on-line e com o projeto executivo que entrego, você consegue executar tranquilamente a distância.',
    },
    {
      index: 3,
      isOpened: false,
      title: 'Vocês parcelam o Projeto?',
      answer:
        'Sim, parcelamos no cartão até 5x sem juros',
    },
    {
      index: 4,
      isOpened: false,
      title: 'Posso contratar o projeto completo e ir fazendo aos poucos?',
      answer: 'Sim, claro! O projeto funciona como um mapa guia, onde você terá todas as medidas e informações que precisa em mão e você pode executar conforme a sua prioridade.',
    },
  ]);

  function handleCollapseClick(index: number) {
    questions[index].isOpened = !questions[index].isOpened;
    setQuestions([...questions]);
  }

  return (

    <div className="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h2>FAQ</h2>
          <p>Perguntas Frequentes</p>
        </div>
        <div className="contact-faq-list">
          <ul>
            {questions.map(question => (
              <li key={question.index}>

                <div className="contact-faq-icon">
                  <FiHelpCircle size={24} color="#D4C098" />
                </div>
                <div className="contact-faq-question" onClick={() => handleCollapseClick(question.index)}>
                  {question.title}
                  <div className="contact-faq-arrow">
                    {question.isOpened ? <FaSortUp /> : <FaSortDown />}
                  </div>
                </div>
                <Collapse isOpened={question.isOpened}>
                  <div className="contact-faq-content">{question.answer}</div>
                </Collapse>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="form" id="form">
        <Forms />
      </div>
    </div>

  );
};

export default Contact;
