import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Carousel from './Crousel'
import Upcoming_events from './Upcoming_events'
import upcoming_events from '../data/upcoming_events'
import Inspire from './Inspire'
const Red = {
  color: "#C21717",
};
const Blue = {
  color: "#003f87",
};
function Home() {
  return (
    <div>
      <Header />
      <div classNameName='Carousel'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner" style={{ height: '650px' }}>
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="./Nasetes/Picture1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="./Nasetes/Picture2.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./Nasetes/Picture4.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="up_heading mt-3 mb-3" >
        <h4>
          <span style={Red}>UPCOMING</span>
          <span> &</span>
          <span style={Blue}> ONGOING</span>
          <span> EVENTS</span>
        </h4>
      </div>
      {upcoming_events.map((item, index) => {
        return (
          <Upcoming_events {...item} />
        )
      })}
      <Footer />
    </div>
  )
}

export default Home