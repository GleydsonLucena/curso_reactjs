// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  const { counter, setCounter } = useCounterContext();
  return (
    <div className="home">
      <h1>Minha Home</h1>
      <p>Contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Aidicionar</button>
      <button>Zerar</button>
    </div>
  );
};

export default Home;
