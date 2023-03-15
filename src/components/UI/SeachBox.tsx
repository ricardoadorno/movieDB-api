import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import Select from "react-select";
// import makeAnimated from "react-select/animated";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

function SeachBox() {
  const navSeach = useNavigate();

  const [inputValue, setInputValue] = useState("");

  // const animatedComponents = makeAnimated();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const keyword = inputValue;

    console.log(keyword);

    if (keyword) {
      navSeach(`/search/${keyword}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid">
      {/* <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={(e) => {
          setInputValue(e.map((item: any) => item.value).join(" "));
        }}
      /> */}
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
