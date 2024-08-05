import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "../assets/styles/CardProduct.sass";

const Product = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/products/${id}`;
  const { products: product, loading, error } = useFetch(url);
  const { name, price } = product;

  return (
    <div className="product-container">
      {error && <div>error.message</div>}
      {loading && <div>Carregando...</div>}
      <h1>{name}</h1>
      <p>
        O preço de {name} é R$: {price}
      </p>
    </div>
  );
};

export default Product;
