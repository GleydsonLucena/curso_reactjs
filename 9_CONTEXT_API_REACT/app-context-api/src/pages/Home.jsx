import { useCounterContext } from "../hooks/useCounterContext";
import { useTittleColorContext } from "../hooks/useTittleColorContext";

const Home = () => {
  const { counter, setCounter } = useCounterContext();
  const { color } = useTittleColorContext();

  return (
    <div className="home">
      <h1 style={{ color: color }}>Minha Home</h1>
      <p>Contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Aidicionar</button>
      <button>Zerar</button>
    </div>
  );
};

export default Home;
