// Gallery.js
import React from 'react';
import '../css/gallery.css'
import Crousel from './Crousel.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx';
const imageData = [
  './Nasetes/Picture1.png',
  './Nasetes/Picture2.png',
  './Nasetes/Picture3.png',
  './Nasetes/Picture4.png',
  './Nasetes/Picture5.png',
  './Nasetes/Picture6.png',
  './Nasetes/Picture7.png',
  './Nasetes/Picture8.png',
  './Nasetes/Picture9.png',
  './Nasetes/Picture10.png',
  './Nasetes/Picture11.JPG',
  './Nasetes/Picture12.JPG',
  './Nasetes/Picture13.JPG',
  './Nasetes/Picture14.JPG',
  './Nasetes/Picture15.JPG',
  './Nasetes/Picture16.JPG',
  './Nasetes/Picture17.JPG',
  './Nasetes/Picture18.JPG',
  './Nasetes/Picture19.JPG',
  './Nasetes/Picture20.JPG',
  './Nasetes/Picture21.JPG',
  './Nasetes/Picture22.JPG',
  './Nasetes/Picture23.JPG',
  './Nasetes/Picture24.JPG',
  './Nasetes/Picture25.JPG',
  './Nasetes/Picture26.JPG',
  './Nasetes/Picture27.JPG',
  './Nasetes/Picture28.png',


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

      <Footer />
    </>
  );
}

export default Gallery;
