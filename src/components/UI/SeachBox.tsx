import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeachBox() {
  const navSeach = useNavigate();

  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const keyword = inputValue;

    console.log(keyword);

    if (keyword) {
      navSeach(`/search/${keyword}`);
    }
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SeachBox;
