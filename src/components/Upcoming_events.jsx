import React from 'react'
import '../css/upevent.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import robotic from './robotic.jpg';
const Red = {
    color: "#C21717",
  };
  const Blue = {
    color: "#003f87",
  };
function Upcoming_events() {
  return (
    <div className="upcoming_event">
        <div className="up_heading">
            <h4>
              <span style={Red}>UPCOMING</span>
              <span> &</span>
              <span style={Blue}> ONGOING</span>
              <span> EVENTS</span>
            </h4>
        </div>
        

    </div>
  )
}

export default Upcoming_events