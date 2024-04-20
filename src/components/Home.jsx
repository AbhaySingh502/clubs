import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Upcoming_events from './Upcoming_events'
import upcoming_events from '../data/upcoming_events'
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
          <span> &</span>
          <span style={Blue}> Link</span>
        </h4>
      </div>
      {upcoming_events.map((item, index) => {
        return (
          <Upcoming_events {...item} />
        )
      })}

      <div className="button">
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
        <button type="button" class="btn btn-secondary btn-sm">Small button</button>
        <button type="button" class="btn btn-secondary btn-sm">Small button</button>
        <button type="button" class="btn btn-secondary btn-sm">Small button</button>
      </div>

      <Footer />
    </div>
  )
}

export default Home