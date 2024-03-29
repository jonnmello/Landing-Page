import { useEffect, useState } from 'react';
import './styles.css';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

type FormData = {
  name: string;
  message: string;
  phone: string;
  email: string;

}


const Forms = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {

    const templateParams = {
      from_name: formData.name,
      messages: formData.message,
      email: formData.email,
      phone: formData.phone
    }
    toast.success("Formulário enviado com sucesso!");

    emailjs.send("service_w2ob9yt", "template_uogzr2d", templateParams, "S7jqO9VwCuTP4RWQg")
      .then((response) => {
        setValue('email', '');
        setValue('name', '');
        setValue('phone', '');
        setValue('message', '');
        setHasError(false);
      })
      .catch((error) => {
        setHasError(true);
        console.log('Erro', error);
        toast.warn("Envio Falhou!");
      });
  };



  return (

    <div className="form-con">
      <div className="form-container">
        <h1 className="form-title">Contato</h1>
        <span>Não encontrou sua dúvida? <br />Mande uma mensagem! </span>
        {hasError && (
          <div className="alert alert-danger">
            Erro preenchimento
          </div>
        )}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            className="form-control input"
            name="name"
            type="text"
            placeholder="Digite seu nome"

          />
          <div className="invalid-feedback d-block">{errors.phone?.message}</div>

          <input
            {...register("phone", {
              required: 'Campo obrigatório'
            })}
            className={`form-control input ${errors.phone ? 'is-invalid' : ''}`}
            name="phone"
            type="text"
            placeholder="Digite seu telefone"

          />
          <div className="invalid-feedback d-block">{errors.email?.message}</div>
          <input
            {...register("email", {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            className={`form-control input ${errors.email ? 'is-invalid' : ''}`}
            type="text"
            name="email"
            placeholder="Digite seu email"

          />

          <textarea
            {...register("message")}
            className="form-control textarea"
            name="message"
            placeholder="Digite sua mensagem..."

          />

          <input className="button" type="submit" value="Enviar" />
        </form>

      </div>
    </div>
  );
}

export default Forms;
