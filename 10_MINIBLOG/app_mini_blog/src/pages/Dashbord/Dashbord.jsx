import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Timestamp } from "firebase/firestore";
import NoPost from "../../components/PostDetail/NoPost";

import "./Dashbord.scss";
const Dashbord = () => {
  const { user } = useAuthContext();
  const uid = user.uid;
  const { documents: post } = useFetchDocuments("posts", null, uid);
  let seconds;
  let nanoseconds;

  post.map((post) => {
    if (post) {
      seconds = post.createdAt.seconds;
      nanoseconds = post.createdAt.nanoseconds;
    }
  });

  const timestamp = new Timestamp(seconds, nanoseconds);

  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <div className="dashbord">
      <h2>Dashbord</h2>
      {post && post.length === 0 ? (
        <NoPost />
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Ver</th>
              <th scope="col">Editar</th>
              <th scope="col">Deletar</th>
            </tr>
          </thead>

          <tbody>
            {post.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  {day}/{month}/{year}
                </td>
                <td>
                  <Link to={`/posts/${post.id}`}>View</Link>
                </td>
                <td>
                  <Link className="edit" to={`/posts/edit/${post.id}`}>
                    Editar
                  </Link>
                </td>
                <td style={{ padding: 0 }}>
                  <button
                    className="delete"
                    onClick={() => console.log("deletou")}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

Dashbord.propTypes = {};

export default Dashbord;
