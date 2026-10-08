import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
import Phonetics from "./Phonetics";
import "./styles/Meaning.css";

export default function Meaning({ word, entry, searchRelatedTerm }) {
  return (
    <div className="Meaning">
      <dd className="part-of-speech">{entry.partOfSpeech}</dd>
      <Phonetics pronunciations={entry.pronunciations} />
      {entry.senses.map((sense, index) => {
        /* Three notes on the code below:
            1) The index + 1 portion adds a numerical structure to the data that an ordered list element could not provide due to the map method used above.
            2) The HTML elements dl, dt, and dd are used as an attempt to improve digital accessibility by employing semantic elements appropriate to definitions in place of generic divs.
            3) Rather than displaying the example sentence via definition.example, I used the map method to loop through the example sentence in the form of the modified array of strings created above. That enables the successful display of the keyword in boldface in the example sentences. */
        return (
          <div key={index}>
            <dd className="definition">
              {index + 1}.{"  "}
              {sense.definition}
            </dd>
            {sense.examples.map((example, index) => {
              return <Example example={example} word={word} key={index} />;
            })}
          </div>
        );
      })}
      <Synonym
        synonyms={entry.synonyms}
        searchRelatedTerm={searchRelatedTerm}
      />
      <Antonym
        antonyms={entry.antonyms}
        searchRelatedTerm={searchRelatedTerm}
      />
    </div>
  );
}
