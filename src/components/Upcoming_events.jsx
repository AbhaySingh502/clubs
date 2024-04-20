import React from 'react'
import '../css/upevent.css'
// import robotic from './robotic.jpg';


const Upcoming_events = ({ title, para, post }) => {
  return (
    <div className="upcoming_event d-flex justify-content-center " >
      <div class="card mb-3 h-auto" style={{ width: "80%", boxShadow: 'black 5px 5px 20px' }}>
        <div class="row g-0 mb-0">
          <div class="text-start">
            <div class="card-body">
              <h5 class="card-title" style={{ fontSize: "2.35rem" }}>{title}</h5>
              <p class="card-text" style={{ fontSize: "1.35rem" }}>{para}</p>
              <p class="card-text text-primary" style={{ fontSize: "1.35rem" }}>{post}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Upcoming_events



