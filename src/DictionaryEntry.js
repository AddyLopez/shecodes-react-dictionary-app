import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./styles/DictionaryEntry.css";

export default function DictionaryEntry(props) {
  if (props.entryData) {
    return (
      <main className="DictionaryEntry">
        <dl>
          <div className="section-wrapper">
            <dt>{props.entryData.word}</dt>
            {props.entryData.phonetics.map((phonetics, index) => {
              return <Phonetics phonetics={phonetics} key={index} />;
            })}
          </div>
          {props.entryData.meanings.map((meaning, index) => {
            return (
              <div className="section-wrapper" key={index}>
                <Meaning
                  word={props.entryData.word}
                  meaning={meaning}
                  searchRelatedTerm={props.searchRelatedTerm}
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
