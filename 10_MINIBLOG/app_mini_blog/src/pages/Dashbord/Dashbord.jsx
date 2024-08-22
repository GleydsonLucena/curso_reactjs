import { useAuthContext } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import ShowPost from "../../components/PostDetail/ShowPost";
import NoPost from "../../components/PostDetail/NoPost";

import "./Dashbord.scss";
const Dashbord = () => {
  const { user } = useAuthContext();
  const uid = user.uid;
  const { documents: post } = useFetchDocuments("posts", null, uid);

  return (
    <div className="dashbord">
      <h2>Dashbord</h2>
      {post && post.length === 0 ? (
        <NoPost />
      ) : (
        <div>
          <p>tem post</p>
        </div>
      )}
      {post && post.map((post) => <ShowPost key={post.id} {...post} />)}
    </div>
  );
};

Dashbord.propTypes = {};

export default Dashbord;
