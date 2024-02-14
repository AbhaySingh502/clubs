import React from 'react'
import '../css/Indiviual.css'
import robotic from '../logos/Picture1.png'
// import robo1 from './robo1.jpg'
// import robo2 from './robo2.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Tilt from 'react-parallax-tilt'
import Team from '../team/Team.jsx'
import Crousel from '../components/Crousel.jsx'
import Individual_page_bottom from '../clubs/Individual_page_bottom.jsx'
import abhivayakt_data from '../data/abhivayakt_data.js'
const Red = {
  color: "#C21717",
};
const Blue = {
  color: "#003f87",
};
// const while_hover = {
//   paddingLeft:"20px",    
//   transition:{duration:0.2}
// }
function Abhivayakt() {
  return (
    <div className='clubpages' style={{ height: "100vh" }} >
      <div className="clubpages_title">
        <h1>ABHIVAYAKT</h1>
      </div>
      <hr className="round" />
      <div className="clubpages_main">
        <div className='clubpages_left'>
          <div className="clubpages_up">
            <img src={robotic} alt="" />
            <div className="clubpages_text">
              <div className="club_icons">
                <a href="{insta_id}"><InstagramIcon sx={{ color: "#0d6efd", fontSize: 30 }} /></a>
                <a href="{linkedin}"><LinkedInIcon sx={{ color: "#0d6efd", fontSize: 30 }} /></a>
                <a href="{youtube}"><YouTubeIcon sx={{ color: "#0d6efd", fontSize: 30 }} /></a>

              </div>
              <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"3"} tiltMaxAngleY={"2"}>
                <div className="clubpages_about" style={{ textAlign: "left", color: "black", fontSize: "20px", fontWeight: "600" }}>
                  <p>
                    Abhivayakt is the social welfare club of IIT Jammu. Abhivayakt is derived from the words “Krit” which means creating + “Asha” which means hope, summing up the tagline of “Abhivayakt” as “the one who creates hope”.We are here to make every possible effort to uplift the condition of the underprivileged, spread awareness, and in the process inculcate in our members a sense of social responsibility. This club was formed in the year 2017 by Abhishek Kumar Gupta with the aim of social welfare alongwith the primary focus of teaching the underprivileged children. Today, this club has expanded to organise donation drives, spread health and hygiene awareness, conduct cultural events to teach ethical values and much more. Abhivayakt currently has two coordinators Ayush Raj and Riddhima Pandey. The club coordinators oversee the entire functioning of the club and all the teams which are working under Abhivayakt to ensure the smooth functioning of this club.There are mainly seven teams which help to run Abhivayakt efficiently:Aksharshala Content Writing Design Event Management Media and Marketing Sponsorship and Outreach Web Development
                  </p>
                </div>
              </Tilt>
            </div>
          </div>
          <hr className="round" />
          <div className="clubpages_down">

            <div className="clubpages_down_heading">
              <h4>
                <span style={Red}>EVENTS</span>
                <span> &</span>
                <span style={Blue}> COMPETATION</span>
              </h4>
            </div>

            <div className="clubpages_down_details">
              <div className="clubpages_crousel">
                <h4>Important events</h4>
                <Crousel />
              </div>
              <div >

                {abhivayakt_data.map((item, index) => {
                  return (
                    <Individual_page_bottom {...item} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <span className="vl"></span>

        <div className='clubpages_right'>
          <div className="clubpages_right_title">
            <h4>
              <span style={Red}>CLUB</span>
              {/* <span> AND</span> */}
              <span style={Blue}> MEMBERS</span>
            </h4>
          </div>
          <div className="cpr_main">
            <Team />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abhivayakt