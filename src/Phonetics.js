import React from "react";
import { Howl } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./styles/Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics.audio.length > 0) {
    const sound = new Howl({
      src: [props.phonetics.audio],
      html5: true,
      loop: false,
      preload: true,
      volume: 1.0,
    });

    return (
      <div className="Phonetics">
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="play-icon"
          type="button"
          onClick={() => {
            sound.play();
            sound.once("end", function () {
              sound.pause();
            });
          }}
        />{" "}
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
