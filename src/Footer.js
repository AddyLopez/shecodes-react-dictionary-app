import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <a
        href="https://github.com/AddyLopez/shecodes-react-dictionary-app"
        title="To Addy's GitHub repository for this project"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://ubiquitous-froyo-69b6d7.netlify.app/index.html"
        title="To Addy's personal website"
        target="_blank"
        rel="noreferrer"
      >
        Addy López
      </a>
    </footer>
  );
}
