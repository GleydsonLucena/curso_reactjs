import Input from "./Input";

import "../../pages/Register/Register.scss";

const Form = () => {
  return (
    <form className="form">
      <Input
        type="text"
        name="name"
        label="Nome"
        placeholder="Digite seu nome"
      />

      <Input
        type="email"
        name="email"
        label="E-mail"
        placeholder="Digite seu E-mail"
      />

      <Input
        type="password"
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Input
        type="password"
        name="ConfirmPassword"
        label="Confirmação de senha"
        placeholder="Confirme sua senha"
      />
    </form>
  );
};

export default Form;
