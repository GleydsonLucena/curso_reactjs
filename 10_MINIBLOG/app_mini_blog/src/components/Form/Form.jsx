import PropTypes from "prop-types";
import Input from "./Input";

import "../../pages/Register/Register.scss";
import { useState } from "react";

const Form = ({ option }) => {
  const [isRegister] = useState(option === "register" ? true : false);
  const [isLogin] = useState(option === "login" ? true : false);

  return (
    <form className="form">
      {isRegister && (
        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
        />
      )}

      {(isLogin || isRegister) && (
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="Digite seu E-mail"
        />
      )}

      {(isLogin || isRegister) && (
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />
      )}

      {isRegister && (
        <Input
          type="password"
          name="ConfirmPassword"
          label="Confirmação de senha"
          placeholder="Confirme sua senha"
        />
      )}

      <button type="submit">{isRegister ? "Cadastrar" : "Entrar"}</button>
    </form>
  );
};

Form.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Form;
