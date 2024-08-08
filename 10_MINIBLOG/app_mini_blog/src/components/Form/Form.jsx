import PropTypes from "prop-types";
import { useContext, useState } from "react";

import Input from "./Input";

import "../../pages/Register/Register.scss";
import { UserContext } from "../../context/UserContext";
const Form = ({ option }) => {
  const { ...value } = useContext(UserContext);
  const [isRegister] = useState(option === "register" ? true : false);
  const [isLogin] = useState(option === "login" ? true : false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {isRegister && (
        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
          onChange={(e) => value.setName(e.target.value)}
          value={value.name}
        />
      )}

      {(isLogin || isRegister) && (
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="Digite seu E-mail"
          onChange={(e) => value.setEmail(e.target.value)}
          value={value.email}
        />
      )}

      {(isLogin || isRegister) && (
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          onChange={(e) => value.setPassword(e.target.value)}
          value={value.password}
        />
      )}

      {isRegister && (
        <Input
          type="password"
          name="ConfirmPassword"
          label="Confirmação de senha"
          placeholder="Confirme sua senha"
          onChange={(e) => value.setConfirmPassword(e.target.value)}
          value={value.ConfirmPassword}
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
