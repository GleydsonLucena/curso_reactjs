import { useState } from "react";
import Input from "../../components/Form/Input";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="home">
      <h2>Veja nossos posts mais recentes</h2>
      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Pesquise posts"
          type="text"
          name="search"
          placeholder="Pesquisar tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Pesquisar</button>
      </form>
      <div className="posts-container">
        {posts && posts.length === 0 && (
          <div className="no-posts">
            <h3>Nenhum post encontrado</h3>
            <Link to="/posts/create">Criar post</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
