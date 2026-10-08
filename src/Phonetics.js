import React from "react";
import "./styles/Phonetics.css";

export default function Phonetics({ pronunciations }) {
  return (
    <div className="Phonetics">
      {pronunciations.map((pronunciation, index) => {
        return (
          <div key={index}>
            <span>{pronunciation.text}</span>
          </div>
        );
      })}
    </div>
  );
}
