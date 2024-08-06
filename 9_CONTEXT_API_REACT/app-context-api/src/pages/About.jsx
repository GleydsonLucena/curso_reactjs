import { useTittleColorContext } from "../hooks/useTittleColorContext";

const About = () => {
  const { color, dispatch, setColorTittle } = useTittleColorContext();
  return (
    <div className="Home">
      <h1 style={{ color: color }}>Meu about</h1>
      <button onClick={() => setColorTittle("RED", dispatch)}>Vermelho</button>
      <button onClick={() => setColorTittle("BLUE", dispatch)}>Azul</button>
    </div>
  );
};

export default About;
