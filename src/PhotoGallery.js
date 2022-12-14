import React from "react";
import "./styles/PhotoGallery.css";

export default function PhotoGallery(props) {
  if (props.photos && props.photos.length > 0) {
    return (
      <section className="PhotoGallery">
        <h2>photo gallery</h2>
        <div className="container">
          <div className="row">
            {props.photos.map((photo, index) => {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photo.src.original}
                    target="_blank"
                    rel="noreferrer"
                    title="See the original photo in a new tab"
                  >
                    <img
                      src={photo.src.landscape}
                      alt={photo.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
