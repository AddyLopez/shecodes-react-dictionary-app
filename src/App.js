import React, { useState, useEffect } from "react";
import axios from "axios";
import { createClient } from "pexels";
import DictionaryEntry from "./DictionaryEntry";
import PhotoGallery from "./PhotoGallery";
import Footer from "./Footer";
import "./styles/App.css";

export default function App(props) {
  const [searchWord, setSearchWord] = useState(props.defaultSearchWord);
  const [entryData, setEntryData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [background, setBackground] = useState(null);

  const handlePexelsResponse = (response) => {
    console.log(response);
    setPhotos(response.photos);
    setBackground(response.photos[0].src.tiny);
  };

  useEffect(() => {
    let pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
    // Example of Pexels API URL = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=9`;
    const client = createClient(pexelsApiKey);
    client.photos
      .search({ query: searchWord, per_page: 9 })
      .then(handlePexelsResponse);
  }, [entryData]);

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
    event.target.reset(); // Resets the form so that the searchWord will not persist in the input across renderings!
    search();
  };

  const searchRelatedTerm = (string) => {
    setSearchWord(string);
    search();
  };

  if (loaded) {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <div className="background-overlay">
          <div className="inset-wrapper">
            <header>
              <h1>React Dictionary Application</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  autoFocus={true}
                  className="form-control"
                  onChange={updateSearchWord}
                  placeholder="Search for a word..."
                />
              </form>
            </header>
            <DictionaryEntry
              entryData={entryData}
              searchRelatedTerm={searchRelatedTerm}
            />
            <PhotoGallery photos={photos} />
            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
