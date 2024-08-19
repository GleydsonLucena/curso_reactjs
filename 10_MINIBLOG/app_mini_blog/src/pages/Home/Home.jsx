import { useEffect, useState } from "react";
import Input from "../../components/Form/Input";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Home = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const { documents } = useFetchDocuments("posts");

  const refactorTags = (tags) => {
    return tags.map((tag) => {
      if (tag[0] !== "#") {
        return `#${tag}`;
      }
      return tag;
    });
  };

  useEffect(() => {
    setPosts(documents);
  }, [documents]);

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
        {posts && (
          <div className="posts-container">
            {posts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <img width="250px" src={post.image} alt={post.title} />
                <p>{post.body}</p>
                <p>Postado por: {post.authorIdentity}</p>
                <p>Data: {post.createdAt.seconds}</p>
                <p>Tags: {refactorTags(post.tagsArray).join(", ")}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
