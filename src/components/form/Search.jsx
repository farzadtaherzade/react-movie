import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search.replace(/ /g, "+").toLowerCase().trim());
    if (search) {
      navigate(`/search?s=${search.replace(/ /g, "+").toLowerCase().trim()}`);
      setSearch("");
    }
  };
  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="input input-ghost"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
