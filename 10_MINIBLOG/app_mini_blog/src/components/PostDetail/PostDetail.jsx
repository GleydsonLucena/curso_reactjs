import PropTypes from "prop-types";
import "./PostDetail.scss";

const PostDetail = ({ ...post }) => {
  const refactorTags = (tags) => {
    return tags.map((tag) => {
      if (tag[0] !== "#") {
        return `#${tag}`;
      }
      return tag;
    });
  };

  return (
    <div className="post-detail">
      <h3>{post.title}</h3>
      <p>Postado por: {post.authorIdentity}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.body}</p>
      <p>Data: {post.createdAt.seconds}</p>
      <p>Tags: {refactorTags(post.tagsArray).join(", ")}</p>
    </div>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object,
};

export default PostDetail;
