import React from 'react';
import { Link } from 'react-router-dom';
import '../css/upevent.css';

function Clubs_card({ key, name, para, image, club_link, FIC, FICEmail }) {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FICEmail);
    alert('Email copied to clipboard');
  };

  return (
    <div className='clubnext'>
      <div className="name d-flex justify-content-between align-items-center mb-3" style={{ borderBottom: '0.2rem solid #1b184f' }}>
        <Link to={club_link} className="nav-link fs-4 text-dark">
          <h2 style={{ marginBottom: '0' }}>{name}</h2>
        </Link>
        <div
          className="contact_us fs-4 d-flex align-items-center text-end ms-3"
          onClick={handleCopyEmail}
          title={FICEmail} // Native tooltip
        >
          {FIC}
        </div>
      </div>
      <div className="row bs-examples" style={{ marginLeft: '0.1rem' }}>
        <Link to={club_link} className="para nav-link fs-4 text-dark">
          <div className="col-xs-8 fs-5 fw-normal">
            <p className="text-justify">{para}</p>
          </div>
        </Link>
        <div className="col-xs-4 col-md-4">
          <Link to={club_link} className='nav-link fs-4 text-dark fancybox thumbnail' style={{ display: 'block', border: '0.2px solid #ddd', borderRadius: '4px', height: 'fit-content' }}>
            <img src={image} alt="" className='img-fluid rounded-start' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Clubs_card;
