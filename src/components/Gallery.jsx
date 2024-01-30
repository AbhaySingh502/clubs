// Gallery.js
import React from 'react';
import '../css/gallery.css'
import Crousel from './Crousel.jsx'
import Header from './Header.jsx'
const imageData = [
  './assetes/basketball.jpg',
  './assetes/abhivyakt.png',
  './assetes/aquatics.jpg',
  './assetes/artihtic.png',
  './assetes/badmintion.jpg',
  './assetes/basketball.jpg',
  './assetes/chess.jpg',
  './assetes/cricket.jpg',
  './assetes/basketball.jpg',
  './assetes/football.jpg',
  './assetes/weightlifting.jpg',
  './assetes/logo.png',
  './assetes/volleyball.jpg',
  './assetes/malang.png',
  './assetes/tennis.png',
  './assetes/robotic.jpg',
  './assetes/dance.png',
  // Add more image paths as needed
];
export function Gallery() {
  return (
    <>
      <Header />
      <div className="gallery_crousel m-4">
        <Crousel />
      </div>

      <div className="gallery">
        {imageData.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item} style={{ width: "100%" }} />
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Gallery;
