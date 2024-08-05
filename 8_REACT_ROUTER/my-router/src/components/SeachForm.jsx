import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/Home.sass";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="formSearch">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        placeholder="Search..."
      />
      <button type="submit" className="icon">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchForm;
