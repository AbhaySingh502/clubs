import React from 'react'
import '../css/Indiviual.css'
import '../css/team.css'
import Header from "../components/Header.jsx"
import Tilt from 'react-parallax-tilt'
import Individual_page_bottom from '../clubs/Individual_page_bottom.jsx'
import astronomy_data from '../data/astronomy_data.js'
const Red = {
  color: "#C21717",
};
const Blue = {
  color: "#003f87",
};

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
function Astronomy() {
  return (
    <div className='clubpages' style={{ height: "100vh" }} >
      <Header />
      <div className="clubpages_title mt-5">
        <h1 style={{ borderBottom: '0.3rem solid green', borderRadius: '5px' }}>ASTRONOMY</h1>
      </div>

      <div className="clubpages_main d-flex">
        <div className='clubpages_left'>
          <div className="clubpages_up d-flex mt-2 me-5 ms-5">
            <div className="clubpages_text">

              <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"3"} tiltMaxAngleY={"2"}>
                <div className="clubpages_about fs-6" style={{ textAlign: "left", color: "black", fontWeight: "600" }}>
                  <p>
                    Astria-za, the Physics and Astronomy Club at IIT Jammu, is a burgeoning community of passionate students dedicated to exploring the vast realms of physics and astronomy. In its initial stages, the club has already shown remarkable growth and enthusiasm among its members. Astria-za serves as a platform for students to delve into the fascinating mysteries of the universe, fostering a keen interest in both theoretical and observational aspects of physics and astronomy. The club organizes regular meetings, workshops, and stargazing events, providing students with opportunities to engage in hands-on experiences and discussions with like-minded peers. As Astria-za continues to expand, it aims to inspire a new generation of scientists and stargazers, contributing to the academic and intellectual vibrancy of IIT Jammu.
                  </p>
                </div>
              </Tilt>
            </div>
          </div>

          <div className="d-flex">
            <div className="clubpages_down mb-2" style={{ width: "70%" }}>

              <div className="clubpages_down_heading">
                <h4>
                  <span style={Red}>EVENTS</span>
                  <span> &</span>
                  <span style={Blue}> COMPETITIONS</span>
                </h4>
              </div>

              <div className="clubpages_down_details">
                <div >

                  {astronomy_data.map((item, index) => {
                    return (
                      <Individual_page_bottom {...item} />
                    )
                  })}
                </div>
              </div>
            </div>
            <span className="vl border-start border-2 border-primary opacity-60"></span>
            <div className='clubpages_right w-30'>
              <div className="clubpages_right_title mb-4">
                <h4>
                  <span className='fs-2' style={Red}>CLUB</span>
                  {/* <span> AND</span> */}
                  <span className='fs-2' style={Blue}> MOMENTS</span>
                </h4>
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
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Astronomy