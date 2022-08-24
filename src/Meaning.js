import React from "react";
import Synonym from "./Synonym";
import Example from "./Example";
import "./styles/Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <dd className="part-of-speech">
        <strong>{props.meaning.partOfSpeech}</strong>
      </dd>
      {props.meaning.definitions.map((definition, index) => {
        /* Three notes on the code below:
          1) The index + 1 portion adds a numerical structure to the data that an ordered list element could not provide due to the map method used above.
          2) The HTML elements dl, dt, and dd are used as an attempt to improve digital accessibility by employing semantic elements appropriate to definitions in place of generic divs.
          3) Rather than displaying the example sentence via definition.example, I used the map method to loop through the example sentence in the form of the modified array of strings created above. That enables the successful display of the keyword in boldface in the example sentences. */
        return (
          <div key={index}>
            <dd className="definition">
              {index + 1}. {definition.definition}
            </dd>
            <Example example={definition.example} word={props.word} />
            <Synonym synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
