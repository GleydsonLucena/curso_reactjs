import { useParams } from "react-router-dom";
import "../assets/styles/CardProduct.sass";

const Info = () => {
  const { id } = useParams();
  return (
    <div className="product-container">
      <h1>Mais informações do produto: {id}</h1>
      <p>Este é o conteúdo da página de informações do produto com ID {id}.</p>
    </div>
  );
};

export default Info;
