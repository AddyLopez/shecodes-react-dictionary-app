import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        <a
          href="https://github.com/AddyLopez/shecodes-react-dictionary-app"
          title="To Addy's GitHub repository for this project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        and design by{" "}
        <a
          href="https://ubiquitous-froyo-69b6d7.netlify.app/index.html"
          title="To Addy's personal website"
          target="_blank"
          rel="noreferrer"
        >
          Addy López
        </a>
      </p>

      <p className="api-attributions dictionary-attribution">
        Definitions courtesy of{" "}
        <a
          href="https://github.com/meetDeveloper/freeDictionaryAPI"
          title="To Free Dictioanry API documentation on GitHub"
          target="_blank"
          rel="noreferrer"
        >
          Free Dictionary API
        </a>
      </p>
      <p className="api-attributions">
        Photos provided by{" "}
        <a
          href="https://www.pexels.com/api/"
          title="To Pexels API page"
          target="_blank"
          rel="noreferrer"
        >
          Pexels
        </a>
      </p>

      <p className="promotion">
        For more, see Addy's{" "}
        <a
          href="https://vermillion-conkies-d9d16e.netlify.app/"
          title="To Addy's React Weather Application with World Map Design"
          target="_blank"
          rel="noreferrer"
        >
          React Weather Application
        </a>
        !
      </p>
    </footer>
  );
}
