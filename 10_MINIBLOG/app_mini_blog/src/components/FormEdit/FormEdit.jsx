import { useState } from "react";
import { useParams } from "react-router-dom";

import { useInsertDocument } from "../../hooks/useInsertDocuments";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUtils } from "../../context/UtilsContext";
import Input from "../../components/Form/Input";

const FormEdit = () => {
  const { id } = useParams();
  const { insertDocument, response } = useInsertDocument("posts");
  const { document: post } = useFetchDocument("posts", id);

  const { error, setError } = useUtils();

  console.log(post);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    try {
      new URL(image);
    } catch (error) {
      setError("URL inválida para a imagem!");
      console.log(error.message);
      return;
    }

    // Validar tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // TODO:
    if (!title || !image || !tags || !body) {
      setError("Preencha todos os campos!");
      return;
    }
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

        {!response.loading && <button>Editar</button>}
        {response.loading && <button disabled>Aguarde...</button>}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default FormEdit;
