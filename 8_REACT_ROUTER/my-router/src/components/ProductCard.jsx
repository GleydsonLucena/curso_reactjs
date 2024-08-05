import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "../assets/styles/CardProduct.sass";

const ProductCard = (props) => {
  return (
    <div className="card-product">
      <h2>{props.name}</h2>
      <p>Preço: R$ {props.price}</p>
      <div className="btn-card">
        <button onClick={() => props.handleDelete(props.id)}>Remover</button>
        <button>Editar</button>
      </div>
      <Link to={`/products/${props.id}`}>
        <button>Detalhes</button>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ProductCard;
