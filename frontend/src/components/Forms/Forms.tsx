import { useState } from 'react';
import './styles.css';
import emailjs from '@emailjs/browser';

const Forms = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messages, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      messages: messages,
      email: email,
      phone: phone

    }
    emailjs.send("service_w2ob9yt", "template_uogzr2d", templateParams, "S7jqO9VwCuTP4RWQg");
  }



  return (
    <div className="form-container">
      <h1 className="form-title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="input"
          type="text"
          placeholder="Digite seu telefone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={messages}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default Forms;
