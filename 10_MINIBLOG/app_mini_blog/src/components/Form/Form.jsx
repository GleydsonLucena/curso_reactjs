import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNewUser } from "../../hooks/useNewUser";
import { useUtils } from "../../hooks/useUtils";

import Input from "./Input";
import "../../pages/Register/Register.scss";

const Form = ({ option }) => {
  // eslint-disable-next-line no-unused-vars
  const { user } = useNewUser();
  const { error, setError } = useUtils();

  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(UserContext);

  const isRegister = option === "register";
  const isLogin = option === "login";

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Preencha todos os campos!");
      return;
    }
    if (isRegister && password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }
    console.log("Submited");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {isRegister && (
        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      )}

      {(isLogin || isRegister) && (
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="Digite seu E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      )}

      {(isLogin || isRegister) && (
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      )}

      {isRegister && (
        <Input
          type="password"
          name="confirmPassword"
          label="Confirmação de senha"
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      )}

      <button type="submit">{isRegister ? "Cadastrar" : "Entrar"}</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

Form.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Form;
