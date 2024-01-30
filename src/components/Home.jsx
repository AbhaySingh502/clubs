import React from 'react'
import Header from './Header'
import Carousel from './Crousel'
import Upcoming_events from './Upcoming_events'
import upcoming_events from '../data/upcoming_events'
import Inspire from './Inspire'
import Footer from './Footer'
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
      <Carousel />
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
      {/* <Inspire /> */}
      <Footer />

    </div>
  )
}

export default Home