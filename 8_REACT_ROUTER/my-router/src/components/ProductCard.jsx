import PropTypes from "prop-types";
import "../assets/styles/CardProduct.sass";

const ProductCard = (props) => {
  return (
    <div className="card-product">
      <h2>{props.name}</h2>
      <p>Preço: {props.price}</p>
      <div className="btn-card">
        <button onClick={() => props.handleDelete(props.id)}>Remover</button>
        <button>Editar</button>
      </div>
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
