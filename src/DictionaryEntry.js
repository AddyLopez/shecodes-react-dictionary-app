import React from "react";
import Meaning from "./Meaning";
import "./styles/DictionaryEntry.css";

export default function DictionaryEntry({ entryData, searchRelatedTerm }) {
  if (entryData) {
    return (
      <main className="DictionaryEntry">
        <dl>
          <div className="section-wrapper">
            <dt>{entryData.word}</dt>
          </div>
          {entryData.entries.map((entry, index) => {
            return (
              <div className="section-wrapper" key={index}>
                <Meaning
                  word={entryData.word}
                  entry={entry}
                  searchRelatedTerm={searchRelatedTerm}
                />
              </div>
            );
          })}
        </dl>
      </main>
    );
  } else {
    return null;
  }
}
