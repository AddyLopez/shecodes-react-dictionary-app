import React from "react";
import "./styles/Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  // This conditional rendering accounts for the presence or absence of the "synonyms" category under "definitions," passed into this component as "props.synonyms.""
  if (props.synonyms) {
    return (
      <dd className="Synonyms">
        {props.synonyms.map((synonym, index) => {
          return <span key={index}>{synonym} </span>;
        })}
      </dd>
    );
  } else {
    return null;
  }
}
