import React from "react";
import "./styles/Antonym.css";

export default function Antonym({ antonyms, searchRelatedTerm }) {
  // This conditional rendering accounts for the presence or absence of the "antonyms" category under "definitions," passed into this component as "props.antonyms.""

  if (antonyms.length > 0) {
    return (
      <dd className="Antonym">
        <span>Antonym(s)*:</span>
        {antonyms.map((antonym, index) => {
          const handleClick = (event) => {
            event.preventDefault();
            searchRelatedTerm(antonym);
          };
          return (
            <button key={index} type="button" onClick={handleClick}>
              {antonym}
            </button>
          );
        })}
        <div>
          (*Double-click on a button to search for a related term. If nothing
          happens, the term is not included in this dictionary.)
        </div>
      </dd>
    );
  } else {
    return null;
  }
}
