import React, { useState } from "react";
import axios from "axios";
import "./styles/Dictionary.css";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState(null);

  const handleDictionaryResponse = (response) => {
    console.log(response.data[0]);
  };

  const search = (event) => {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  };

  const updateSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  // https://api.dictionaryapi.dev/api/v2/entries/en_US/turtle

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={updateSearchWord} />
      </form>
    </div>
  );
}
