import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const url = `http://localhost:3000/products?q=${query}`;
  const { products, error, loading } = useFetch(url);

  console.log(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Search Results</h1>
      <div className="wrapper-container">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
