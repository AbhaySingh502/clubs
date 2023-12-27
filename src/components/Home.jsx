import React from 'react'
import Header from './Header'
import Carousel from './Crousel'
import Upcoming_events from './Upcoming_events'
function Home() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <Upcoming_events/>
    </div>
  )
}

export default Home