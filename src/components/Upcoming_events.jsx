import React from 'react'
import '../css/upevent.css'
// import robotic from './robotic.jpg';


const Upcoming_events = ({ key, title, image, para, date }) => {
  return (
    <div className="upcoming_event d-flex justify-content-center " >
      <div class="card mb-3 h-auto" style={{ width: "80%", boxShadow: 'black 5px 5px 20px' }}>
        <div class="row g-0 mb-0">
          <div class="col-md-8 text-start">
            <div class="card-body">
              <h5 class="card-title" style={{ fontSize: "2.35rem" }}>{title}</h5>
              <p class="card-text" style={{ fontSize: "1.35rem" }}>{para}</p>
              <p class="card-text text-danger" style={{ fontSize: "1rem" }}>{date}</p>
            </div>
          </div>
          <div class="col-md-4" >
            <img src={image} class="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>

    </div>
  )
}
export default Upcoming_events



