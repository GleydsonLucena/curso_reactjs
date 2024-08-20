import { Link } from "react-router-dom";
import "./PostDetail.scss";

const NoPost = () => {
  return (
    <div className="no-posts">
      <h3>Nenhum post encontrado</h3>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default NoPost;
