import Form from "../../components/Form/Form";
import "./Register.scss";

const Register = () => {
  return (
    <section className="register">
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias.</p>
      <Form />
    </section>
  );
};

export default Register;
