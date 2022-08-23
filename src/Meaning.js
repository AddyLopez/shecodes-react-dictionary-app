import React from "react";
import "./styles/Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  console.log(props.word);
  return (
    <div className="Meaning">
      <dd className="part-of-speech">
        <strong>{props.meaning.partOfSpeech}</strong>
      </dd>
      {props.meaning.definitions.map((definition, index) => {
        // This conditional rendering accounts for the presence or absence of the "example" category under "definitions."
        if (definition.example) {
          /* The objective of the following lines is to render the keyword in boldface wherever it appears in the example sentence. This feature also covers instances of the keyword 1) as a substring of longer strings (e.g. "running" will render in boldface when the keyword is "run"), 2) as a capitalized word, 3) when reiterated in the example sentence (e.g. If a sentence contains "really, really" then both will appear bold). */
          let exampleStrings = definition.example.split(" "); // Converts words in the the example sentence into a new array of strings.

          // Iterates over the example sentence as an array of strings, checks if the string when lowercased includes the keyword, and uses a reassignment operation to wrap the string at that index in a strong element.
          for (let i = 0; i < exampleStrings.length; i++) {
            if (exampleStrings[i].toLowerCase().includes(props.word)) {
              exampleStrings[i] = <strong>{exampleStrings[i]}</strong>;
            }
          }

          /* Three notes on the code below:
          1) The index + 1 portion adds a numerical structure to the data that an ordered list element could not provide due to the map method used above.
          2) The HTML elements dl, dt, and dd are used as an attempt to improve digital accessibility by employing semantic elements appropriate to definitions in place of generic divs.
          3) Rather than displaying the example sentence via definition.example, I used the map method to loop through the example sentence in the form of the modified array of strings created above. That enables the successful display of the keyword in boldface in the example sentences. */
          return (
            <div key={index}>
              <dd className="definition">
                {index + 1}. {definition.definition}
              </dd>
              <dd className="example">
                <span className="example-indicator">Example: </span>
                {exampleStrings.map((string, index) => {
                  return <span key={index}>{string} </span>;
                })}
              </dd>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <dd className="definition">
                {index + 1}. {definition.definition}
              </dd>
            </div>
          );
        }
      })}
    </div>
  );
}
