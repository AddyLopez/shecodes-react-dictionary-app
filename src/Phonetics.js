import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics.audio.length > 0) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
