
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
      title: 'O valor do projeto é caro?',
      answer:
        'O valor do projeto é uma porcentagem pequena em relação ao que se gasta numa obra. O projeto é um dos menores gastos em todos esse processo e sem dúvida o investimento que vale mais a pena. O que vai deixar sua casa linda não é o porcelanato X, o móvel Y, mas sim a junção de todos os materiais e é no projeto que avaliamos as melhores opções pra que você tenha segurança nas suas escolhas.',
    },
    {
      index: 1,
      isOpened: false,
      title: 'Quanto custa o m²?',
      answer:
        'Assim como cada projeto é único, nossos serviços e orçamentos são personalizados para atender as necessidades dos nossos clientes, então não temos um preço fixo para serviços diferente, por isso não cobramos por metro quadrado.',
    },
    {
      index: 2,
      isOpened: false,
      title: 'Como funciona o projeto a distância?',
      answer:
        'O projeto a distância funciona da mesma forma que o presencial, a diferença é que as medidas não serão tiradas pela nossa equipe, o restante funciona perfeitamente como um projeto presencial, direcionamos como pegar as informações que precisamos para elaborar o projeto. Faremos reuniões on-line para apresentação do projeto, e ao final dele o cliente consegue executar tranquilamente a distância.',
    },
    {
      index: 3,
      isOpened: false,
      title: 'Vocês parcelam o Projeto?',
      answer:
        'Sim! Parcelamos no cartão sem juros. ',
    },
    {
      index: 4,
      isOpened: false,
      title: 'Posso contratar o projeto completo e ir fazendo aos poucos?',
      answer: 'Sim, claro! O projeto funciona como um mapa, onde você terá todas as medidas e informações que precisa em mão e vai poder executar conforme a sua prioridade.',
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
