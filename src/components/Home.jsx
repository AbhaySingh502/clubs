import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Upcoming_events from './Upcoming_events'
import upcoming_events from '../data/upcoming_events'
import Tilt from 'react-parallax-tilt'
import '../css/team.css'
import SchoolIcon from '@mui/icons-material/School';
import Jammu from './Jammu'
import HeroSection from './HeroSection'
const Red = {
  color: "#C21717",
};
const Blue = {
  color: "#003f87",
};
const videoback = {
  width: "100%",
  height: "100vh",
  objectFit: "cover",


}
function Home() {
  return (
    <div>
      <Header />
      <video autoPlay muted loop className=' object-center' style={videoback}>
        <source src='./assetes/home.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="up_heading mt-4 mb-4" >
        <h4 className='fs-1'>
          <span style={Red}>Messages</span>

        </h4>
      </div>
      {upcoming_events.slice(0, 1).map((item, index) => {
        return (
          <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>
            <Upcoming_events {...item} />
          </Tilt>
        )
      })}

      {/* <div className="container">
        <div className="main">
          <div className="one">
            <div className="circle">
              <Diversity1Icon sx={{ fontSize: 60 }} />
            </div>
            <h2>Clubs</h2>
          </div>

        </div>
      </div> */}
      <Jammu />
      <div className="buton">

        <div class="container">
          <div class="row mb-3">
            <div class="col-md-3 icon-container">
              <a href="https://www.iitjammu.ac.in/" style={{ textDecoration: 'none' }}>
                <div class="icon clubs">
                  <img src="/assetes/iit.png" alt="" />
                </div>
                <h4>IIT JAMMU</h4>
              </a>
              <p>Discover a vibrant student community at our institute, where opportunities for personal growth and unforgettable experiences await. Visit our website to learn more and join us in shaping the future!</p>
            </div>
            <div class="col-md-3 icon-container">
              <a href="https://www.instagram.com/anhad.iitjmu/" style={{ textDecoration: 'none' }}>
                <div class="icon events">
                  <img src="/Nasetes/anhad.jpg" alt="" />
                  {/* <i class="fas fa-flag"></i> */}
                </div>
                <h4>ANHAD</h4>
              </a>
              <p>Join us at our Fest for an unforgettable celebration of talent, innovation, and fun. Visit our website to experience the excitement and be part of something extraordinary!</p>
            </div>
            <div class="col-md-3 icon-container">
              <a href="https://www.instagram.com/sports.iitjammu/" style={{ textDecoration: 'none' }}>
                <div class="icon sports">
                  <img src="/Nasetes/logo.png" alt="" />
                  {/* <i class="fas fa-futbol"></i> */}
                </div>
                <h4>SPORTS</h4>
              </a>
              <p>Experience the thrill of competition and camaraderie at our sports events. Visit our website to join the action and be part of our dynamic sports community! </p>
            </div>
          </div>
        </div>
      </div>
      <HeroSection />














      {/* <div className="mt-4 mb-4">
        <div className="button d-flex justify-content-around align-items-center w-70 m-auto" style={{ width: '70%' }}>
          <div className="con">
            <a href="https://www.iitjammu.ac.in/">IIT JAMMU</a>
          </div>
          <div className="con">
            <a href="https://www.iitjammu.ac.in/alumni-affairs">Alumni Affairs</a>
          </div>
          <div className="con">
            <a href="https://www.iitjammu.ac.in/events">Events</a>
          </div>
          <div className="con">
            <a href="https://www.iitjammu.ac.in/videogallery">Vedio Gallery</a>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  )
}

export default Home