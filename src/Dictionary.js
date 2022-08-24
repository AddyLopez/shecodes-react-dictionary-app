import React, { useState } from "react";
import axios from "axios";
import DictionaryEntry from "./DictionaryEntry";
import "./styles/Dictionary.css";

export default function Dictionary(props) {
  const [searchWord, setSearchWord] = useState(props.defaultSearchWord);
  const [entryData, setEntryData] = useState(null);

  const handleDictionaryResponse = (response) => {
    setEntryData(response.data[0]);
  };

  const search = (event) => {
    event.preventDefault();

    // DOCUMENTATION: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  };

  const updateSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={updateSearchWord} />
      </form>
      <DictionaryEntry entryData={entryData} />
    </div>
  );
}
