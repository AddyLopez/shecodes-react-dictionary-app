import React, { useState } from "react";
import axios from "axios";
import DictionaryEntry from "./DictionaryEntry";
import "./styles/Dictionary.css";

export default function Dictionary(props) {
  const [searchWord, setSearchWord] = useState(props.defaultSearchWord);
  const [entryData, setEntryData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleDictionaryResponse = (response) => {
    setEntryData(response.data[0]);
    setLoaded(true);
  };

  const search = () => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  };

  const updateSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const searchRelatedTerm = (string) => {
    setSearchWord(string);
    search();
  };

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" autoFocus={true} onChange={updateSearchWord} />
        </form>
        <DictionaryEntry
          entryData={entryData}
          searchRelatedTerm={searchRelatedTerm}
        />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
