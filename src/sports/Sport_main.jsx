import React from 'react'
// import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/sport.css'
import Sports_card from './Sports_card';
import sportdata from '../data/sportdata'
import Tilt from 'react-parallax-tilt'
const videoUrl = './assetes/pravah.mp4'; // Replace with your actual video URL

const Red = {
  color: "#C21717",
};
const Blue = {
  color: "#003f87",
};
function Sport_main() {
  return (

    <div className='Sport_main' style={{ backgroundColor: "#abd0e84f" }}>
      <Header />
      <div className='sectionStyle'>
        <video autoPlay muted loop className='videoBackgroundStyle'>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ zIndex: "1" }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Sport in IIT Jammu
          </h1>
          <p style={{ fontSize: '1.2rem' }}>
            Explore the passion, competition, and excellence in sports at IIT Jammu.
          </p>
        </div>
      </div>

      <div className="sport_heading" style={{ marginTop: "2rem" }}>
        <h4 style={{ fontSize: "3.5rem" }}>
          <span style={Red}>SPORTS</span>
          <span style={Blue}> CLUBS</span>
        </h4>
      </div>
      <div className="sport_cards">
        <div className="row">

          {sportdata.slice(0, 3).map((item, index) => {
            return (
              <div className="mb-4" style={{ width: 'fit-content' }}>
                <Sports_card {...item} />
              </div>
            )
          })}

        </div>
        <div className="row">

          {sportdata.slice(3, 6).map((item, index) => {
            return (
              <div className="mb-4" style={{ width: 'fit-content' }}>
                <Sports_card {...item} />
              </div>
            )
          })}

        </div>
        <div className="row">

          {sportdata.slice(6, 9).map((item, index) => {
            return (
              <div className="mb-4" style={{ width: 'fit-content' }}>
                <Sports_card {...item} />
              </div>
            )
          })}

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sport_main