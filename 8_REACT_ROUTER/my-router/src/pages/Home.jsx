import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import ProductCard from "../components/ProductCard";

import "../assets/styles/Home.sass";
import SeachForm from "../components/SeachForm";

const Home = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [formDisplay, setFormDisplay] = useState(false);

  const url = "http://localhost:3000/products/";
  const { products, loading, error, httpRequest, deleteProducts } =
    useFetch(url);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 100000),
      name: !name ? "Produto sem Nomes" : name,
      price: parseFloat(price),
    };
    httpRequest(newProduct, "POST");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "price") {
      const newPrice = value.replace(",", ".");
      setPrice(newPrice);
    }
  };

  const handleDelete = (id) => {
    deleteProducts(id);
  };

  return (
    <div className="homeAndAbout-container">
      <SeachForm />
      <div className="add-product">
        <div className="btn-container">
          <button onClick={() => setFormDisplay(!formDisplay)}>
            Adicionar Produto
          </button>
        </div>
        {formDisplay && (
          <form onSubmit={handleSubmit} className="form">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={name}
              placeholder="Nome do produto"
            />
            <input
              onChange={handleChange}
              type="text"
              name="price"
              value={price || ""}
              placeholder="Preço do produto"
              title="Preço deve ser um número"
              pattern="[0-9]+(\.[0-9]{1,2})?"
              required
            />
            <button type="submit">Adicionar</button>
          </form>
        )}
      </div>
      <div className="wrapper-container">
        {error && <div>{error.message}</div>}
        {!products.length && !loading && <p>Sem produtos...</p>}
        {loading ? (
          <p>Carregando dados...</p>
        ) : (
          Array.isArray(products) &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
