import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div className="home">
      <h1>Minha Home</h1>
      <p>Contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Aidicionar</button>
      <button onClick={() => setCounter(0)}>Zerar</button>
    </div>
  );
};

export default Home;
