import React from 'react'
import '../css/Indiviual.css'
import Header from "../components/Header.jsx"
import Tilt from 'react-parallax-tilt'
import Individual_page_bottom from '../clubs/Individual_page_bottom.jsx'
import abhivayakt_data from '../data/abhivayakt_data.js'
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
function Abhivayakt() {
  return (
    <div className='clubpages' style={{ height: "100vh" }} >
      <Header />
      <div className="clubpages_title mt-5">
        <h1 style={{ borderBottom: '0.3rem solid green', borderRadius: '5px' }}>ABHIVAYAKT</h1>
      </div>

      <div className="clubpages_main d-flex">
        <div className='clubpages_left w-70'>
          <div className="clubpages_up d-flex mt-2" style={{ height: '13%' }}>
            <img src='./assetes/abhivyakt.png' className='img-fluid rounded-start me-3' alt="" />
            <div className="clubpages_text">

              <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"3"} tiltMaxAngleY={"2"}>
                <div className="clubpages_about" style={{ textAlign: "left", color: "black", fontSize: "20px", fontWeight: "600" }}>
                  <p>
                    The Literary Club of IIT Jammu, also known as Abhivaykt, aims to promote the passion for literature and the desire to enhance the imagination of all. Our main focus is to provide a platform where everyone can express their views and opinions with like-minded individuals. Club meetings, on one hand, often include debates, improv, and such to help one improve speaking skills and regular sessions like creative writing, poetry writing and recitation to help express their thoughts on paper and verbally.  We wish for each and every person to express their uniqueness, and to feel at ease while doing so.

                  </p>
                </div>
              </Tilt>
            </div>
          </div>
          <div className="clubpages_down mb-2">

            <div className="clubpages_down_heading">
              <h4>
                <span style={Red}>EVENTS</span>
                <span> &</span>
                <span style={Blue}> COMPETITIONS</span>
              </h4>
            </div>

            <div className="clubpages_down_details">
              <div >

                {abhivayakt_data.map((item, index) => {
                  return (
                    <Individual_page_bottom {...item} />
                  )
                })}
              </div>
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
  )
}

export default Abhivayakt