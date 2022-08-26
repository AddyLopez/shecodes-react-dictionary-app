import React, { useState } from "react";
import axios from "axios";
import DictionaryEntry from "./DictionaryEntry";
import PhotoGallery from "./PhotoGallery";
import "./styles/Dictionary.css";

export default function Dictionary(props) {
  const [searchWord, setSearchWord] = useState(props.defaultSearchWord);
  const [entryData, setEntryData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  const handleDictionaryResponse = (response) => {
    setEntryData(response.data[0]);
    setLoaded(true);
  };
  const handlePexelsResponse = (response) => {
    setPhotos(response.data.photos);
  };

  const search = () => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000015888ae2855384a059cdc24187c49a20d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  };

  const updateSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset(); // Resets the form so that the searchWord will not persist in the input across renderings!
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
        <PhotoGallery photos={photos} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
