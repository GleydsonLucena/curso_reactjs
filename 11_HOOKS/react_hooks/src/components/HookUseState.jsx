import { useState } from "react";

const HookUseState = () => {
  const [state, setState] = useState({
    userName: "Gleydson",
  });
  let name = "joao";

  const changeNames = () => {
    name = "Joao pedro";
    setState((prevState) => {
      return { ...prevState, userName: "Gleydson Lucena" };
    });
  };

  // 2 - useState e Input

  const [age, setAge] = useState(0);
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setMessage("Formulário enviado com sucesso!");
    }, 1000);
    setMessage("");
  };

  return (
    <div>
      nomes:
      <p> variávvel: {name}</p>
      <p>state: {state.userName}</p>
      <button onClick={() => changeNames()}>Mudar nomes</button>
      {/* // 2 - useState e Input */}
      <h2>useState e Input</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">Idade:</label>
        <input
          type="text"
          name="idade"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
      {message && <div>{message}</div>}
      <p>Idade: {age}</p>
    </div>
  );
};

export default HookUseState;
