import { useState } from "react";

import { useUtils } from "../../context/UtilsContext";
import Input from "../../components/Form/Input";

import "./CreatePost.scss";

const CreatePost = () => {
  const { loading, error } = useUtils();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="create-post">
      <h2>Criar um post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>

      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Título"
          type="text"
          name="title"
          placeholder="Pense em um bom título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <Input
          label="URL da imagem"
          type="text"
          name="image"
          placeholder="Insira uma imagem que represente seu post"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            placeholder="Escreva seu conteúdo do post..."
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>

        <Input
          label="Tags"
          type="text"
          name="tags"
          placeholder="Insira as  tags separadas por vírgula"
          onChange={(e) => setTags(e.target.value)}
          value={tags}
        />

        {!loading && <button type="submit">Publicar</button>}
        {loading && (
          <button disabled type="submit">
            Aguarde...
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

CreatePost.propTypes = {};

export default CreatePost;
