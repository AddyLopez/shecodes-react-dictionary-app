import React from "react";
import "./styles/Synonym.css";

export default function Synonym(props) {
  // This conditional rendering accounts for the presence or absence of the "synonyms" category under "definitions," passed into this component as "props.synonyms.""

  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <dd className="Synonym">
        <span>Similar term(s)*:</span>
        {props.synonyms.map((synonym, index) => {
          const handleClick = (event) => {
            event.preventDefault();
            props.searchRelatedTerm(synonym);
          };
          return (
            <button key={index} type="button" onClick={handleClick}>
              {synonym}
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
