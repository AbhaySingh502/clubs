import React from 'react'
import '../css/upevent.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import robotic from './robotic.jpg';


const Upcoming_events = ({ key, title, image, para, date }) => {
  return (
    <div className="upcoming_event">
      <div class="card mb-3 h-auto" style={{ width: "80%" }}>
        <div class="row g-0 mb-0">
          <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style={{ fontSize: "2.35rem" }}>{title}</h5>
              <p class="card-text" style={{ fontSize: "1.35rem" }}>{para}</p>
              <p class="card-text text-body-secondary" style={{ fontSize: "1rem" }}>{date}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Upcoming_events



