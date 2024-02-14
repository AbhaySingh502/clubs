import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Clubs_card({ key, name, para, image, club_link }) {
  return (
    <div className='clubnext' >
      <div className="name d-flex justify-content-between mb-3" style={{ borderBottom: '0.2rem solid #1b184f' }}>
        <Link to={club_link} className="nav-link fs-4 text-dark">
          <h2 style={{ marginBottom: '0' }}>{name}</h2> </Link>
        <div className="contact_us fs-4" >
          <InstagramIcon className='me-3' fontSize="large" />
          <LinkedInIcon className='me-3' fontSize="large" />
          <YouTubeIcon className='me-3' fontSize="large" />
        </div>
      </div>
      <div className="row bs-examples">
        <Link to={club_link} className="nav-link fs-4 text-dark" style={{ width: '66%' }}>
          <div className="col-xs-8 fs-5 fw-normal" >
            <p class="text-justify">{para}</p>
          </div>
        </Link>
        <div className="col-xs-4 col-md-4" style={{ width: '34%' }}>
          <Link to={club_link} className=' nav-link fs-4 text-dark fancybox thumbnail' style={{ display: 'block', border: '0.2px solid #ddd', borderRadius: '4px', height: 'fit-content' }}>
            <img src={image} alt="" className='img-fluid rounded-start' />
          </Link>


          <address>
            <strong>Club Secretary:</strong>
            <span>Aishwarya Omar</span>
            E-mail : <a href="mailto:#" target="_blank"> 16pixels[at]iitgn.ac.in</a>
          </address>



        </div>
      </div>
    </div>
  )
}

export default Clubs_card