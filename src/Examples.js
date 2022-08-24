import React from "react";
import "./styles/Examples.css";

export default function Examples(props) {
  // This conditional rendering accounts for the presence or absence of the "example" category under "definitions," passed into this component as "props.example."
  if (props.example) {
    /* The objective of the following lines is to render the keyword in boldface wherever it appears in the example sentence. This feature also covers instances of the keyword 1) as a substring of longer strings (e.g. "running" will render in boldface when the keyword is "run"), 2) as a capitalized word, 3) when reiterated in the example sentence (e.g. If a sentence contains "really, really" then both will appear bold). */
    // Converts words in the the example sentence into a new array of strings.
    let exampleStrings = props.example.split(" ");

    // Iterates over the example sentence as an array of strings, checks if the string when lowercased includes the keyword, and uses a reassignment operation to wrap the string at that index in a strong element.
    for (let i = 0; i < exampleStrings.length; i++) {
      if (exampleStrings[i].toLowerCase().includes(props.word)) {
        exampleStrings[i] = <strong>{exampleStrings[i]}</strong>;
      }
    }

    return (
      <dd className="Examples">
        <span className="example-indicator">Example: </span>
        {exampleStrings.map((string, index) => {
          return <span key={index}>{string} </span>;
        })}
      </dd>
    );
  } else {
    return null;
  }
}
