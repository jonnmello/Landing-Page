
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
      title: 'What is FAQ?',
      answer:
        'A list of questions and answers relating to a particular subject, especially one giving basic information for users of a website.',
    },
    {
      index: 1,
      isOpened: false,
      title: 'What is Styled Components?',
      answer:
        'React Library that help you to create styles with javascript files. In Style Components you will create React Components to style your page.',
    },
    {
      index: 2,
      isOpened: false,
      title: 'What is Context API?',
      answer:
        'The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application.',
    },
    {
      index: 3,
      isOpened: false,
      title: 'what is lorem ipsum?',
      answer:
        'The expression Lorem ipsum in graphic design and publishing is a standard Latin text used in graphic production to fill the text spaces in publications to test and adjust visual aspects before using real content.',
    },
    {
      index: 4,
      isOpened: false,
      title: 'How to Contact the Developer?',
      answer: 'Follow me in Social Media (GitHub, Linkedin)',
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
          <p>Frequently Asked Questions</p>
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
