import React from "react";
import "./styles/Synonym.css";

export default function Synonym(props) {
  console.log(props.synonym);
  // This conditional rendering accounts for the presence or absence of the "synonyms" category under "definitions," passed into this component as "props.synonyms.""
  if (props.synonym) {
    return (
      <dd className="Synonym">
        {props.synonym.map((synonym, index) => {
          return <span key={index}>{synonym} </span>;
        })}
      </dd>
    );
  } else {
    return null;
  }
}
