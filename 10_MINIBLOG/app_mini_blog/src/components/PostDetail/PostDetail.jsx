import PropTypes from "prop-types";
import "./PostDetail.scss";
import { Link } from "react-router-dom";

const PostDetail = ({ ...post }) => {
  return (
    <div className="post-detail">
      <h3>{post.title}</h3>
      <p>Postado por: {post.authorIdentity}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.body}</p>
      <p>Data: {post.createdAt.seconds}</p>
      <p>
        Tags:{" "}
        {post.tagsArray.map((tag, index) =>
          tag[0] === "#" ? (
            <span key={index}>{tag}</span>
          ) : (
            <span key={index}>{`#${tag}`}</span>
          )
        )}
      </p>
      <Link to={`/posts/${post.id}`}>Ver</Link>
    </div>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object,
};

export default PostDetail;
