import React from "react";

export default function PhotoGallery(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="PhotoGallery">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-4" key={index}>
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
