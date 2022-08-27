import React from "react";
import { Howl } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./styles/Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics.audio.length > 0) {
    const sound = new Howl({
      autoSuspend: true,
      html5: true,
      html5PoolSize: 10,
      loop: false,
      preload: true,
      src: [props.phonetics.audio],
      volume: 1.0,
    });

    return (
      <div className="Phonetics">
        <FontAwesomeIcon
          icon={faVolumeHigh}
          className="volume-high-icon"
          type="button"
          onClick={() => {
            sound.play();
            sound.once("end", function () {
              sound.pause();
            });
          }}
        />{" "}
        <span>{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
