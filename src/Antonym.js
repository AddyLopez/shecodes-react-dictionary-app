import React from "react";
import "./styles/Antonym.css";

export default function Antonym(props) {
  // This conditional rendering accounts for the presence or absence of the "antonyms" category under "definitions," passed into this component as "props.antonyms.""
  if (props.antonyms && props.antonyms.length > 0) {
    return (
      <dd className="Antonym">
        <span>Antonym(s):</span>
        {props.antonyms.map((antonym, index) => {
          return (
            <button key={index} type="button">
              {antonym}
            </button>
          );
        })}
      </dd>
    );
  } else {
    return null;
  }
}
