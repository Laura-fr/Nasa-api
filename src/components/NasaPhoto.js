import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();

      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <div className="nasa-photo">
        <div>
          {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} className="photo" />
          ) : (
            <iframe
              title="space-video"
              src={photoData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
              className="photo"
            />
          )}
        </div>
        <div className="resume">
          <h2>{photoData.title}</h2>

          <span>{photoData.explanation}</span>
          <p>Date of the day : {photoData.date}</p>
        </div>
      </div>
    </>
  );
};

export default NasaPhoto;
