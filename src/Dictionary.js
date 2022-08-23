import React, { useState } from "react";
import "./styles/Dictionary.css";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState(null);
  const search = (event) => {
    event.preventDefault();
    alert(`Searching for ${searchWord}...`);
  };

  const updateSearchWord = (event) => {
    console.log(event.target.value);
    setSearchWord(event.target.value);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={updateSearchWord} />
      </form>
    </div>
  );
}
