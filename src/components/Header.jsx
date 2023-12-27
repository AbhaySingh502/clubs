import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../css/team.css"




const Red = {
  color: "#C21717",
};
const Blue = {
  color: "#003f87",
};
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const shadowStyle = {
    backgroundColor: '#f0f8ff',
    boxShadow: '5px 5px 20px black', // Adjust the values as needed
  };
  return (
    <div className='header' style={shadowStyle}>
      {/* <div className="team_card_img" style={{height:"20rem",width:"20rem"}}>
            <span>
                <img src="./assetes/logo2.png" alt="" />
            </span>
        </div> */}
          <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-space-around justify-content-md-between py-3 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <h2>
              <span style={Red}>CLUBS</span>
              <span> @</span>
              <span style={Blue}> IIT JAMMU</span>
            </h2>
          </a>
        </div>

        <ul className={ "nav col-12 col-md-auto mb-2 justify-content-evenly mb-md-0 "} style={{fontSize:"1.5rem",width:"50%"}}>
          <li>
          <Link to="/" className="icon-link icon-link-hover" style={{textDecoration:'none'}}q>
            <a class="nav-link px-2">HOME</a>
            </Link>
          </li>
          <li>
          <Link to="/Clubs" className="icon-link icon-link-hover" style={{textDecoration: "none"}}q>
            <a class="nav-link px-2">CLUBS</a>
            </Link>
          </li>
          <li>
          <Link to="/Sports" className="icon-link icon-link-hover" style={{textDecoration: "none"}}q>
            <a class="nav-link px-2">SPORTS</a>
            </Link>
          </li>

          <li>
          <Link to="/Gallery" className="icon-link icon-link-hover" style={{textDecoration: "none"}}q>
            <a class="nav-link px-2 ">GALLERY</a>
            </Link>
          </li>
        </ul>

      
      </header>
    </div>
    </div>
  )
}

export default Header